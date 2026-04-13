import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Text, useGLTF } from "@react-three/drei";
import { Html } from "@react-three/drei";
import LightRays from "../react-bits/LightRays";
import CanvasLoader  from "../CanvasLoader"

function Lotus() {
  const gltf = useGLTF("/models/a_pink_lotus_flower.glb");

  const { scene } = gltf;

  scene.scale.set(0.5, 0.5, -0.5); // scale down
  scene.position.set(0, 0.5, 0); // move it a little lower

  return <primitive object={scene} />;
}

function LotusText() {
 
  return (
    <Text
      position={[0, 0.5, 0]}
      fontSize={0.2}
      depth={0.1}
      bevelEnabled={true}             // gives a nice “raised” look
      bevelThickness={0.1}
      bevelSize={0.03}
      bevelSegments={3}
    //   fillOpacity={0.4}
      color="#ffddaa"
      anchorX="center"
      anchorY="bottom"
      material={new THREE.MeshStandardMaterial({ roughness: 5, metalness: 0.32 })}
    >
      <div className="vintage">Ahamkara</div>
    </Text>
  );
}
function MovingLotus() {
  const flowerRef = useRef(null);
  const textRef = useRef(null);

  useFrame((state) => {
    // Rotate the flower slowly around Y
    if (flowerRef.current) {
      flowerRef.current.rotation.y += 0.005;
    }

    // Let the text bob up‑and‑down
    if (textRef.current) {
      const t = state.clock.getElapsedTime();
      textRef.current.position.y = -0.7 + Math.sin(t * 1) * 0.07; // tiny bob
    }
  });
  return (
    <>
      <group ref={flowerRef}>
        <Lotus />
      </group>

      <group ref={textRef}>
        <LotusText />
      </group>
    </>
  );
}
export default function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>
      <div className="h-screen flex items-center justify-center relative z-10">
        <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 10, 7.5]} intensity={0.8} />
          <Suspense fallback={CanvasLoader}>
            <MovingLotus />
          </Suspense>

          <OrbitControls enableDamping />
          <Preload all />
        </Canvas>
      </div>
    </>
  );
}
