import * as THREE from "three";
import { useEffect, useMemo, useState } from "react";
import { BoxGeometry, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry } from "three";
import { RoundedBox } from "@react-three/drei";

const useProjectVideoTexture = (source) => {
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    let disposed = false;
    setTexture(null);
    if (!source) return undefined;

    const video = document.createElement("video");
    const nextTexture = new THREE.VideoTexture(video);

    video.src = source;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "auto";

    nextTexture.colorSpace = THREE.SRGBColorSpace;
    nextTexture.flipY = true;
    nextTexture.wrapS = THREE.ClampToEdgeWrapping;
    nextTexture.wrapT = THREE.ClampToEdgeWrapping;

    const handleLoadedData = () => {
      if (disposed) return;
      setTexture(nextTexture);
      video.play().catch(() => {
        // The screen remains on its first available frame when autoplay is blocked.
      });
    };

    video.addEventListener("loadeddata", handleLoadedData, { once: true });
    video.load();

    return () => {
      disposed = true;
      video.pause();
      video.removeAttribute("src");
      video.load();
      nextTexture.dispose();
    };
  }, [source]);

  return texture;
};

const DemoComputer = ({ texture }) => {
  const videoTexture = useProjectVideoTexture(texture);

  const videoMaterial = useMemo(
    () =>
      new MeshBasicMaterial({
        map: videoTexture,
        color: videoTexture ? "#ffffff" : "#101820",
        toneMapped: false,
        side: THREE.DoubleSide,
        depthTest: false,
        depthWrite: false,
      }),
    [videoTexture]
  );
  const frameMaterial = useMemo(
    () => new MeshStandardMaterial({ color: "#68737c", metalness: 0.65, roughness: 0.3 }),
    []
  );
  const darkMaterial = useMemo(
    () => new MeshStandardMaterial({ color: "#080a0d", metalness: 0.2, roughness: 0.55 }),
    []
  );
  const baseGeometry = useMemo(() => new BoxGeometry(4.6, 0.05, 2.35), []);
  const lidGeometry = useMemo(() => new BoxGeometry(4.1, 3.05, 0.16), []);
  const screenGeometry = useMemo(() => new PlaneGeometry(3.98, 2.93), []);
  const keyboardDeckGeometry = useMemo(() => new BoxGeometry(4.6, 0.0225, 1.98), []);
  const trackpadGeometry = useMemo(() => new BoxGeometry(1.25, 0.035, 0.72), []);
  const hingeGeometry = useMemo(() => new BoxGeometry(4.1, 0.06, 0.12), []);
  const keyMaterial = useMemo(
    () => new MeshStandardMaterial({ color: "#69747d", metalness: 0.2, roughness: 0.5 }),
    []
  );
  const keyPositions = useMemo(
    () =>
      Array.from({ length: 4 }, (_, row) =>
        Array.from({ length: 10 }, (_, column) => [
          -2.155 + column * 0.43 + (row % 2) * 0.02,
          -1.4675,
          -0.32 + row * 0.27,
        ])
      ).flat().concat([
        [-1.75, -1.4675, 0.76],
        [-1.39, -1.4675, 0.76],
        [-1.03, -1.4675, 0.76],
        [0.58, -1.4675, 0.76],
        [0.94, -1.4675, 0.76],
        [1.3, -1.4675, 0.76],
      ]),
    []
  );

  return (
    <group dispose={null}>
      <mesh geometry={lidGeometry} material={frameMaterial} position={[-0.1125, 0.42, 0]} />
      <mesh
        geometry={screenGeometry}
        material={videoMaterial}
        position={[-0.1125, 0.42, 0.082]}
        renderOrder={10}
      />
      <group rotation={[0.18, 0, 0]}>
        <mesh geometry={baseGeometry} material={frameMaterial} position={[-0.225, -1.55, 0]} />
        <mesh geometry={keyboardDeckGeometry} material={frameMaterial} position={[-0.225, -1.51375, 0]} />
        {keyPositions.map((position, index) => (
          <RoundedBox
            key={index}
            args={[0.31, 0.07, 0.16]}
            radius={0.025}
            smoothness={3}
            material={keyMaterial}
            position={position}
          />
        ))}
        <RoundedBox
          args={[1.35, 0.075, 0.16]}
          radius={0.025}
          smoothness={3}
          material={keyMaterial}
          position={[-0.225, -1.4675, 0.76]}
        />
        <mesh geometry={trackpadGeometry} material={frameMaterial} position={[-0.225, -1.485, 0.72]} />
        <mesh geometry={hingeGeometry} material={darkMaterial} position={[-0.225, -0.14, 0.1]} />
      </group>
    </group>
  );
};

export default DemoComputer;
