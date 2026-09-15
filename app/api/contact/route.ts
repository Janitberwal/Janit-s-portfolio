import {z} from 'zod';
const schema=z.object({name:z.string().trim().min(2).max(100),email:z.string().email().max(254),message:z.string().trim().min(10).max(5000),company:z.string().max(500).optional()});
export async function POST(request:Request){
 if(request.headers.get('origin')&&request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Please submit from this website.'},{status:403});
 if(Number(request.headers.get('content-length')||0)>12000)return Response.json({error:'Message is too long.'},{status:413});
 let body;try{const raw=await request.text();if(raw.length>12000)return Response.json({error:'Message is too long.'},{status:413});body=JSON.parse(raw)}catch{return Response.json({error:'Invalid message.'},{status:400})}
 const parsed=schema.safeParse(body);if(!parsed.success)return Response.json({error:'Please provide a name, valid email, and message of 10–5000 characters.'},{status:400});
 if(parsed.data.company)return Response.json({ok:true});
 const endpoint=process.env.CONTACT_WEBHOOK_URL;
 if(!endpoint)return Response.json({error:'This portfolio is a demo. Message delivery is not connected yet; your message has not been sent.'},{status:503});
 try{const result=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.CONTACT_WEBHOOK_TOKEN?{Authorization:`Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify({name:parsed.data.name,email:parsed.data.email,message:parsed.data.message}),signal:AbortSignal.timeout(8000)});if(!result.ok)throw new Error();return Response.json({ok:true})}catch{return Response.json({error:'Delivery failed. Please try again later.'},{status:502})}
}
