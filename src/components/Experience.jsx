import {
  Billboard,
  Box,
  CameraControls,
  Environment,
  Float,
  Image,
  MeshReflectorMaterial,
  OrbitControls,
  RenderTexture,
  Text,
  useFont,
} from "@react-three/drei";
import Campsite from "./campsite.jsx";
import { degToRad } from "three/src/math/MathUtils.js";
import { useEffect, useRef,  } from "react";
import { useFrame } from "@react-three/fiber";
import nicoPhoto from "/public/nico-photo.jpg";
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useTexture } from "@react-three/drei";


import GasMask from "./gasmask.jsx";

import MusicPlayer from "./MusicPlayer.jsx";

import { Color } from "three";
import F35 from "./F35.jsx";


export const Experience = () => {
  const controls = useRef();
  const textMaterial = useRef();
  
  
  const intro = async () => {
    controls.current.dolly(-22)
    controls.current.smoothTime = 1.6;
    controls.current.dolly(9, true)
  }

  const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.5);

  useEffect(() => {
    intro()
  }
  , [])


  const Nico = () => {
    const texture = useTexture('/nico-photo.jpg');
  
    return (
      <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
        position={[2.3, 0, 0]} // Adjust position as needed
      >
        <mesh>
          <planeBufferGeometry attach="geometry" args={[2, 2]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh>
      </Billboard>
    );
  };
  return (
    <>
      <CameraControls ref={controls} />
      <OrbitControls maxDistance={30} minDistance={16} />
      <Text
        font={"fonts/Poppins-Black.ttf"}
        position-x={-1.2}
        position-y={-0.5}
        position-z={1}
        lineHeight={0.8}
        textAlign="center"
        rotation-y={degToRad(30)}
        anchorY={"bottom"}
      >
        NICOROC{"\n"}SAMIZDAT
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
         
        >
          {/* <RenderTexture attach={"map"}>
            <color attach="background" args={["#fff"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} >
            <Nico
    scale={10} // Increase scale for a larger image
 
    position-y={-0.5}
    position-x={-2}
  />
            </Float>
          </RenderTexture> */}
        </meshBasicMaterial>
      </Text>
   <group rotation-y={degToRad(-25)} position-x={3}>
  
 
   </group>  
   <mesh position-y={-0.48} rotation-x={-Math.PI / 2}>
       < planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={10}
          roughness={1}
          depthScale={1}
          opacity={0.5}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#333"
          metalness={0.5}
        />
      </mesh>
    <mesh  >
    <Nico  />
    </mesh>

     
   <Environment preset="sunset" />


<Float floatIntensity={4} >
  <F35 scale={0.5} position-x={-2} position-y={3} position-z={-2} />
</Float>

  <MusicPlayer />

 
    </>
  );
};
