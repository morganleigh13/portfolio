import * as THREE from 'three'
import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DemoComputer = (props) => {
  const group = useRef(); 

  const { nodes, materials, animations } = useGLTF('/models/laptop-01.glb');
  const { actions } = useAnimations(animations, group);
  console.log(nodes, materials)
const videoTex = useVideoTexture(
  props.texture ? props.texture : '/textures/project/project1.mp4',
  {
    onloadedmetadata: () => {
    
     
    },
  }
);
  useGSAP(() => {
    console.log(group)
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
    console.log(videoTex)
   

  }, [videoTex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <mesh
          name="Frame_ComputerFrame_0"
          // castShadow
          // receiveShadow
          geometry={nodes['Frame_ComputerFrame_0'].geometry}
          material={nodes['Frame_ComputerFrame_0'].material}
          position={[0.00, 0.00, 0.00]}
          rotation={[-1.29, 0.00, 0.00]}
          scale={[1, 1, 1.00]}
          >
        </mesh>
        <mesh
  
          name="Screen_ComputerScreen_0"
          // castShadow
          // receiveShadow
          geometry={nodes['Screen_ComputerScreen_0'].geometry}
          material={nodes['Screen_ComputerScreen_0'].material}
          position={[0.00, 0.03, -0.1]}
          rotation={[3.24, -0.00, -3.14]}
          scale={[ 1,1, 1]}
          >
          <meshBasicMaterial
        map={videoTex}
        toneMapped={false}
    
      />
        </mesh>
        <group name="RootNode" position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, -0.033]} scale={0.045}>
          <group
            name="Frame_ComputerFrame_0"
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[0.00, 0.00, 0.00]}
          />
          <group
            name="Screen_ComputerScreen_0"
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[0.00, 0.00, 0.00]}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/laptop-01.glb');

export default DemoComputer;
