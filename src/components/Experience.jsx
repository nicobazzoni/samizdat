import {
  Billboard,
  Box,
  CameraControls,
  Cylinder,
  Environment,
  Facemesh,
  Float,
  Image,
  MeshReflectorMaterial,
  OrbitControls,
  RenderTexture,
  ScreenQuad,
  Sparkles,
  Sphere,
  Text,
  useFont,
} from "@react-three/drei";
import Campsite from "./campsite.jsx";
import { degToRad } from "three/src/math/MathUtils.js";
import { useEffect, useRef,  } from "react";
import { useFrame } from "@react-three/fiber";
import nicoPhoto from "/public/nico-photo.jpg";
import { useLoader } from '@react-three/fiber';
import { Box2, TextureLoader } from 'three';
import { useTexture } from "@react-three/drei";
import Mask2 from "./mask2.jsx";
import { Edges } from "@react-three/drei";
import Jet from "./Fighter_jet.jsx";



import GasMask from "./gasmask.jsx";

import MusicPlayer from "./MusicPlayer.jsx";

import { Color } from "three";
import F35 from "./F35.jsx";
import Tank from "./tank.jsx";


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

  const Cubes = () => {
    const texture = useTexture('/nico-photo.jpg');
    const meshRef = useRef();
    const handleClick = () => {
      window.open('https://www.soundcloud.com/nicoroc', '_blank');
    };
  
    useFrame(() => {
      // Rotate the cube on each frame
      if (meshRef.current) {
       // Adjust speed of rotation on x-axis
        meshRef.current.rotation.y += 0.005; // Adjust speed of rotation on y-axis
      }
    });
  
    return (
      <mesh ref={meshRef} position={[2, 0, 0]} onClick={handleClick}>
        <boxGeometry />
        <meshBasicMaterial map={texture} />
        <Edges scale={1.1} threshold={15} color="aqua" />
        
      </mesh>
    );
  }


  
   

  return (
    <>
      <CameraControls ref={controls} />
      <mesh position={[0,8,0]}>
        <boxGeometry args={[100, 100, 100]} />
        <meshBasicMaterial color={"#000"} />
        <Jet scale={0.5} />
        <Text  font={"fonts/Poppins-Black.ttf"} position-y={-0.5} color="aqua"fontSize={0.3}>
          s a m i z d a t
        </Text>
      </mesh>
      <OrbitControls maxDistance={30} minDistance={10} />
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
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#fff"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4}   >
            <Mask2 
    scale={5} // Increase scale for a larger image
 
    position-y={-0.5}
    position-x={-1}

  

    //rotation 

    
  />
            </Float>
          </RenderTexture>
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
   
    <Cubes  />
    </mesh>

     
   <Environment preset="sunset" />


<Float floatIntensity={4} >
  <F35 scale={0.5} position-x={-2} position-y={3} position-z={-2} />
</Float>

  <MusicPlayer />
  <Tank />

 
    </>
  );
};
