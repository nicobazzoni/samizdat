/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/city_soldier.glb -o src/components/CitySoldier.jsx -k -K -r public 
Author: buh (https://sketchfab.com/inobi_ll)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/city-soldier-636b5a7c7e0c400abda269ba382f3252
Title: City Soldier
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/city_soldier.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    if (actions['stay pose']) {
      actions['stay pose'].play();
    }
  }, [actions]);
  console.log(animations);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.943}>
          <group name="Root">
            <group name="Camera_Interest" position={[-10.099, 184.855, -39.636]} />
            <group name="Camera" position={[-339.556, 341.868, 660.496]} rotation={[2.921, 0.43, -3.048]} scale={0.1} />
            <group name="����������" position={[0.719, -0.647, 1.89]}>
              <group name="����������_1" />
            </group>
            <group name="base_soldier1" position={[0, 0.323, 1.24]}>
              <primitive object={nodes.base_soldier1_rootJoint} />
              <group name="shir_war1_low" position={[0, -0.342, -0.102]} />
              <group name="hand_war1_low" position={[0, -0.29, -0.12]} />
              <group name="sh_war1_low" position={[0, -0.324, -0.309]} />
              <group name="boot_war1" position={[0, -0.312, -1.208]} />
              <group name="head_war1_low" position={[-0.001, -0.318, 0.518]} />
              <group name="bproof_war1_low" position={[0, -0.342, 0.057]} />
              <group name="body_add_war1_low" position={[0, -0.094, 0.05]} />
              <skinnedMesh name="shir_war1_low_0" geometry={nodes.shir_war1_low_0.geometry} material={materials.shir_war1} skeleton={nodes.shir_war1_low_0.skeleton} />
              <skinnedMesh name="hand_war1_low_0" geometry={nodes.hand_war1_low_0.geometry} material={materials.hand_war1} skeleton={nodes.hand_war1_low_0.skeleton} />
              <skinnedMesh name="sh_war1_low_0" geometry={nodes.sh_war1_low_0.geometry} material={materials.sh_war1} skeleton={nodes.sh_war1_low_0.skeleton} />
              <skinnedMesh name="boot_war1_0" geometry={nodes.boot_war1_0.geometry} material={materials.boot_war1} skeleton={nodes.boot_war1_0.skeleton} />
              <skinnedMesh name="head_war1_low_0" geometry={nodes.head_war1_low_0.geometry} material={materials.head_war1} skeleton={nodes.head_war1_low_0.skeleton} />
              <skinnedMesh name="head_war1_low_1" geometry={nodes.head_war1_low_1.geometry} material={materials.glass} skeleton={nodes.head_war1_low_1.skeleton} />
              <skinnedMesh name="bproof_war1_low_0" geometry={nodes.bproof_war1_low_0.geometry} material={materials.bproof_war1} skeleton={nodes.bproof_war1_low_0.skeleton} />
              <skinnedMesh name="body_add_war1_low_0" geometry={nodes.body_add_war1_low_0.geometry} material={materials.body_add_war1} skeleton={nodes.body_add_war1_low_0.skeleton} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/city_soldier.glb')

export default Model
