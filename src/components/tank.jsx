/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/Tank.glb -o src/components/tank.jsx -k -K -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF('/Tank.glb')
  const tankRef = useRef();
  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const speed = 0.2; // Slower speed for a larger circle
  
    if (tankRef.current) {
      // Large radius for a wider circular path
      const radius = 20;
      tankRef.current.position.x = Math.sin(elapsedTime * speed) * radius;
      tankRef.current.position.z = Math.cos(elapsedTime * speed) * radius;
  
      // Adjust rotation to face the direction of movement
      tankRef.current.rotation.y = Math.PI / 2 - (elapsedTime * speed);
    }
  });
  

  return (
<group ref={tankRef} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="Cube002" position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[50.4, 40.36, 24.437]}>
            <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={materials['Material.001']} />
            <mesh name="Cube002_2" geometry={nodes.Cube002_2.geometry} material={materials['Material.002']} />
            <mesh name="Cube002_3" geometry={nodes.Cube002_3.geometry} material={materials['Material.003']} />
            <mesh name="Cube002_4" geometry={nodes.Cube002_4.geometry} material={materials['Material.005']} />
            <mesh name="Cube002_5" geometry={nodes.Cube002_5.geometry} material={materials['Material.004']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Tank.glb')

export default Model