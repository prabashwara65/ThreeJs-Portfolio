"use client";
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const laptop = React.memo(function laptop(props) {
  const { nodes, materials } = useGLTF('/models/gaming_laptop_with_surface_keyboard.glb');
  const modelRef = useRef();

  // Optional rotation animation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007;
    }
  });


  useFrame((state , delta , XRFrame) => {
    //console.log(state.clock)
    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime)*0.15
  })

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group 
      position={[0.2, 0.7, 0.3]} 
      scale ={[1, 1 , 1]}
      rotation={[-Math.PI / 2.3, 0.1, -0.8]}
    
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Material}
            scale={[1, 1, 1.408]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials['Material.003']}
            position={[-1.161, 0.859, -0.003]}
            rotation={[Math.PI / 2, 0.2, -Math.PI / 2]}
            scale={[1, 0.994, 0.994]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials['Material.004']}
            position={[-0.131, 0.078, -0.01]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials['Material.004']}
            position={[-0.691, 0.077, 0.087]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials['Material.004']}
            position={[0.741, 0.069, -0.002]}
            scale={[1.075, 0.703, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_14.geometry}
            material={materials['Material.002']}
            position={[0.004, 0.058, 0.004]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[0.463, 1.016, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials['Material.005']}
            position={[-1.151, 0.856, 0.06]}
            rotation={[Math.PI / 2, 0.2, -Math.PI / 2]}
          />
        </group>
      </group>
    </group>
  );
});

export default laptop;
useGLTF.preload('/medels/gaming_laptop_with_surface_keyboard.glb');
