/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/gas mask.glb -o src/components/gasmask.jsx -k -K -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/gas mask.glb')
  return (
    <group {...props} dispose={null} rotation={[Math.PI / 4, 2, 4]}>
      <group>
        <mesh name="group1623270110" geometry={nodes.group1623270110.geometry} material={materials.mat22} />
        <mesh name="group1857700354" geometry={nodes.group1857700354.geometry} material={materials.mat22} />
        <mesh name="group481478436" geometry={nodes.group481478436.geometry} material={materials.mat24} />
        <mesh name="group1218812383" geometry={nodes.group1218812383.geometry} material={materials.mat24} />
        <mesh name="group407499741" geometry={nodes.group407499741.geometry} material={materials.mat23} />
        <mesh name="group1862406355" geometry={nodes.group1862406355.geometry} material={materials.mat23} />
        <mesh name="group902614581" geometry={nodes.group902614581.geometry} material={materials.mat23} />
        <mesh name="group198186150" geometry={nodes.group198186150.geometry} material={materials.mat22} />
        <mesh name="group1609687013" geometry={nodes.group1609687013.geometry} material={materials.mat23} />
        <mesh name="group1127264247" geometry={nodes.group1127264247.geometry} material={materials.mat23} />
        <mesh name="group1468851257" geometry={nodes.group1468851257.geometry} material={materials.mat23} />
        <mesh name="group403465180" geometry={nodes.group403465180.geometry} material={materials.mat23} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/gas mask.glb')

export default  Model 