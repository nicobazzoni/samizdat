import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import Footer from "./components/Footer.jsx";
import { Html } from "@react-three/drei";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 10000); // 
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <div className="loading-screen">samizdat</div>; // Display loading screen
  }

  

  return (
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
      <color attach="background" args={["#171720"]} />
      <Experience />
      {/* Other components */}
    </Canvas>
  );
}

export default App;
