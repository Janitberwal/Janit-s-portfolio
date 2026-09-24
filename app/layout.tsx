import type { Metadata } from 'next';
import './globals.css';
const origin='https://aarav-creative-portfolio.nk-willbyers.chatgpt.site';
export const metadata: Metadata = {metadataBase:new URL(origin),title:'Janit Berwal — Full-Stack Developer',description:'Janit Berwal is an Information Technology student at GGSIP University building full-stack applications, real-time systems, and computer vision projects.',alternates:{canonical:'/'},openGraph:{title:'Janit Berwal — Full-Stack Developer',description:'Full-stack development, real-time systems, and computer vision.',url:origin,type:'website'},twitter:{card:'summary',title:'Janit Berwal — Full-Stack Developer',description:'Explore BhejaFry, SAMS, and computer vision work by Janit Berwal.'},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){const analytics=process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;return <html lang="en"><body>{children}{analytics&&<script defer data-domain={analytics} src="https://plausible.io/js/script.js"/>}</body></html>}

