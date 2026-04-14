import * as THREE from "three";
import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Text, useGLTF} from "@react-three/drei";
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
  const font = useLoader(FontLoader, "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/fonts/gentilis_bold.typeface.json");
  const textGeom = useMemo(() => {
    const g = new TextGeometry("Morgan  Adams", {
      font,
      size: 0.08,
      height: 0.005,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.006,
      bevelSize: 0.003,
      bevelOffset: 0,
      bevelSegments: 2,
    });
    g.center(); 
    return g;
  }, [font]);

  const textMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: 0xffddaa }),
    []
  );
  const meshRef = useRef();

  // Animate the bob‑up‑and‑down effect
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = -0.7 + Math.sin(t * 1) * 0.01;
  });

  return (
    <mesh
      ref={meshRef}
      geometry={textGeom}
      material={textMat}
      position={[0, 10, -10]} 
      // optional fine‑tuning:
      scale={0.5}  
    />
  );
 
}
export function MovingLotus() {
  const flowerRef = useRef();
  const textRef = useRef();

  useFrame(() => {
    if (flowerRef.current) flowerRef.current.rotation.y += 0.005;
  
    textRef.current.position.y = .7  
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
