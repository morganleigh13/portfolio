import * as THREE from "three";
import React, { Suspense, useRef, useMemo, forwardRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Text, useGLTF } from "@react-three/drei";
import LightRays from "../react-bits/LightRays";
import CanvasLoader from "../CanvasLoader";

function Lotus() {
  const gltf = useGLTF("/models/a_pink_lotus_flower.glb");

  const { scene } = gltf;

  scene.scale.set(0.5, 0.5, -0.5); // scale down
  scene.position.set(0, 0.5, 0); // move it a little lower

  return <primitive object={scene} />;
}


export const HiddenText = forwardRef((props, ref) => {
 
  return (
    <Text
      ref={ref}
      // font={font} 
      fontSize={0.026}
      anchorX="center"
      anchorY="middle"
      color="#01df72"
      maxWidth={0.03}
      lineHeight={1}
      maxLineCount={1}
      position={[0, 0.33, 0.5]}
      renderOrder={5} // <‑‑ (optional) draw after the lotus
      depthTest={false}
    >
      Ahamakara
    </Text>
  );
});
function LotusText() {
  let font = useLoader(
    FontLoader,
    "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/fonts/gentilis_bold.typeface.json"
  );
  
  const textGeom = useMemo(() => {
    const g = new TextGeometry("Morgan  Adams", {
      font,
      size: 2.2,
      depth: 3,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 2,
      bevelSize: 0.3,
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

function TitleText() {
 let font = useLoader(
    FontLoader,
    "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/fonts/gentilis_bold.typeface.json"
  );
  const textGeom = useMemo(() => {
    const g = new TextGeometry("Software Developer", {
      font,
      size: 2.3,
      depth: 3,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 2,
      bevelSize: 0.3,
      bevelOffset: 0,
      bevelSegments: 2,
    });
    g.center();
    return g;
  }, [font]);

  const mat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#10b981" }),
    []
  );
  const titleMeshRef = useRef();

  // Animate the bob‑up‑and‑down effect
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    titleMeshRef.current.position.y = -0.7 + Math.sin(t * 1) * 0.01;
  });
  const geometry = new TextGeometry( 'Hello three.js!', {
    font: font,
    size: 8,
    depth: 5,
    curveSegments: 12
  } );

  return (
    <mesh
      ref={titleMeshRef}
      geometry={textGeom}
      material={mat}
      position={[0, 10, -10]}
      // optional fine‑tuning:
      scale={0.501}
    />
  );
}

export function MovingLotus() {
  const flowerRef = useRef();
  const textRef = useRef();
  const titleRef = useRef();
  const hiddenRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (flowerRef.current) {
      flowerRef.current.rotation.y += 0.003; // slow spin
      flowerRef.current.rotation.x = 0.5; // slight tilt toward camera
    }

    if (hiddenRef.current && flowerRef.current) {
      const flowerWorldPos = new THREE.Vector3();
      flowerRef.current.getWorldPosition(flowerWorldPos);
      const dist = camera.position.distanceTo(flowerWorldPos);
      hiddenRef.current.scale.setScalar(dist < 1.5 ? 1 : 0);
      const tilt = dist < 1.5 ? -Math.PI / 5.5 : 0;
      hiddenRef.current.rotation.x = tilt;
    }
    // Text with my name
    textRef.current.position.y = 0.67;
    titleRef.current.position.y = -1.3;
  });

  return (
    <>
      <group ref={hiddenRef}>
        <HiddenText />
      </group>
      <group ref={flowerRef}>
        <Lotus />
      </group>
      <group ref={textRef}>
        <LotusText />      
      </group>
      <group ref={titleRef}>
        <TitleText />      
      </group>
   
    </>
  );
}

export default function App() {
  return (
    <>
      <div style={{ width: "100%", height: "110%", position: "absolute" }}>
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
      <div id='lotus' className="h-screen flex justify-center relative z-10">
       
          <Canvas
            style={{ width: "100%", height: "100%" }}
            camera={{ position: [0, 0, 3], fov: 45 }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 10, 7.5]} intensity={0.8} />
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enablePan enableZoom enableDamping minDistance={1} maxDistance={3} />
              <MovingLotus />
              {/* <BouncingText /> */}
            </Suspense>

            <Preload all />
          </Canvas>
        
      </div>
    </>
  );
}
