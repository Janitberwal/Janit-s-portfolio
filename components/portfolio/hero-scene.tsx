'use client';

// A lightweight, resolution-independent binary-search illustration.
export default function HeroScene() {
  const nodes = [[200,76,'32'],[110,166,'16'],[290,166,'48'],[60,260,'08'],[155,260,'24'],[245,260,'40'],[340,260,'56']] as const;
  const edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]];
  return <svg viewBox="0 0 400 360" fill="none" aria-hidden="true" style={{width:'100%',height:'100%',overflow:'visible'}}>
    <g stroke="var(--border)" strokeWidth="1"><path d="M20 76H380M20 166H380M20 260H380" strokeDasharray="2 9"/></g>
    <g stroke="var(--muted-foreground)" strokeOpacity=".35" strokeWidth="1.5">{edges.map(([a,b])=><path key={`${a}-${b}`} d={`M${nodes[a][0]} ${nodes[a][1]}L${nodes[b][0]} ${nodes[b][1]}`}/>)}</g>
    <path d="M200 76L110 166L155 260" stroke="var(--accent)" strokeWidth="2"/>
    {nodes.map(([x,y,value],i)=><g key={value}>
      {i===4&&<circle cx={x} cy={y} r="32" stroke="var(--accent)" strokeOpacity=".25"/>}
      <circle cx={x} cy={y} r="23" fill="var(--background)" stroke={i===0||i===1||i===4?'var(--accent)':'var(--border)'} strokeWidth="1.5"/>
      <text x={x} y={y+5} textAnchor="middle" fill={i===4?'var(--accent)':'var(--muted-foreground)'} fontFamily="monospace" fontSize="14">{value}</text>
    </g>)}
    <text x="200" y="327" textAnchor="middle" fill="var(--muted-foreground)" fontFamily="monospace" fontSize="10" letterSpacing="2">BINARY SEARCH / O(log n)</text>
  </svg>;
}

