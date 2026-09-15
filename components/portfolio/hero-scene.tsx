'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import type { Mesh } from 'three';
function Sculpture({reduced}:{reduced:boolean}){const mesh=useRef<Mesh>(null);useFrame(({pointer})=>{if(mesh.current&&!reduced){mesh.current.rotation.x+=(pointer.y*.2+.45-mesh.current.rotation.x)*.04;mesh.current.rotation.y+=(pointer.x*.4-.35-mesh.current.rotation.y)*.04}});return <mesh ref={mesh} rotation={[.45,-.35,-.45]}><torusKnotGeometry args={[1.35,.45,144,20,2,3]}/><MeshDistortMaterial color="#b6a0ef" metalness={.65} roughness={.24} distort={reduced?0:.12} speed={reduced?0:1.1}/></mesh>}
export default function HeroScene({reduced=false}:{reduced?:boolean}){return <Canvas camera={{position:[0,0,6.3],fov:40}} dpr={[1,1.5]} frameloop={reduced?'demand':'always'} gl={{antialias:true,alpha:true,powerPreference:'low-power'}}><ambientLight intensity={1.4}/><directionalLight position={[3,4,4]} intensity={5} color="#eee0ff"/><pointLight position={[-3,-2,2]} intensity={25} color="#6665ff"/><directionalLight position={[-3,2,-2]} intensity={4} color="#b7e7ff"/><Sculpture reduced={reduced}/></Canvas>}
