import * as THREE from "three";
import React, { Suspense, useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Text, useGLTF } from "@react-three/drei";
import LightRays from "../react-bits/LightRays";
import { useDispatch, useSelector } from "react-redux";
import { setInteraction } from "../../redux/animationSlice";
import CanvasLoader from "../CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../data";





function Lotus() {
  const gltf = useGLTF("/models/a_pink_lotus_flower.glb");

  const { scene } = gltf;

  scene.scale.set(0.5, 0.5, -0.5); // scale down
  scene.position.set(0, 0.7, 0); // move it a little lower

  return <primitive object={scene} />;
}



function HiddenText(){
  let font = useLoader(
    FontLoader,
    "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/fonts/gentilis_bold.typeface.json"
  );
  
  const hiddenTextGeom = useMemo(() => {
    const g = new TextGeometry("Ahamakara", {
      font,
      size: .05,
      depth: .05,
      curveSegments: 12,
      bevelEnabled: false,
      bevelThickness: 1,
      bevelSize: 0.09,
      bevelOffset: 0,
      bevelSegments: 1,
    });
    g.center();
    return g;
  }, [font]);

  const textMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#01df72" }),
    []
  );
  const meshRef = useRef();

  return (
    <mesh
      ref={meshRef}
      geometry={hiddenTextGeom}
      material={textMat}
      position={[0, .39, .69]}
      // optional fine‑tuning:
      scale={0.5}
    />
  );
} 

function LotusText() {
  const isSmall = useMediaQuery({ maxWidth: 600 });
  const isMobile = useMediaQuery({ minWidth: 600, maxWidth: 900 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1024});

const sizes = calculateSizes(isSmall, isMobile, isTablet)

  let font = useLoader(
    FontLoader,
    "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/fonts/gentilis_bold.typeface.json"
  );
  
  const textGeom = useMemo(() => {
    const g = new TextGeometry("Morgan  Adams", {
      font,
      size: sizes.textScale,
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
  }, [font, sizes]);

  const textMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#ffd5a3" }),
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
  const isSmall = useMediaQuery({ maxWidth: 600 });
  const isMobile = useMediaQuery({ minWidth: 600, maxWidth: 900 });
  const isTablet = useMediaQuery({ minWidth: 900, maxWidth: 1024});
  let sizes = calculateSizes(isSmall, isMobile, isTablet)

 let font = useLoader(
    FontLoader,
    "https://cdn.jsdelivr.net/npm/three@0.170.0/examples/fonts/gentilis_bold.typeface.json"
  );
  const textGeom = useMemo(() => {
    const g = new TextGeometry("Software Developer", {
      font,
      size: sizes.textScale,
      depth: 1.5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 0.3,
      bevelOffset: 0,
      bevelSegments: 2,
    });
    g.center();
    return g;
  }, [font, sizes]);

  const mat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#a29dff" }),
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
      hiddenRef.current.scale.setScalar(dist < 2.5 ? 1 : 0);
      const tilt = dist < 12.5 ? -Math.PI / 5.5 : 0;
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

export default function LotusApp() {
  const dispatch = useDispatch();
  const interaction = useSelector((state) => state.animations.interaction);


  return (
    <>
  
      <div style={{ width: "100%", height: "110%", position: "absolute"}}>
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
            {!interaction ? null : <OrbitControls enablePan enableZoom enableDamping minDistance={1} maxDistance={3} /> 
           }
              <MovingLotus />
            </Suspense>

            <Preload all />
          </Canvas>
        
      </div>
      <button type='button' className="absolute top-5 right-5 border z-100 rounded-xl px-2 vintage tracking-widest text-secondary" onClick={() => dispatch(setInteraction(!interaction))}>
        {interaction ? "Stop Interaction" : "Start Interaction"}
      </button>
    </>
  );
}
