
"use client";
import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Box3, Vector3 } from "three";

const MacBook = React.memo(function MacBook(props) {
  const { nodes, materials } = useGLTF("/models/macbook_laptop.glb");
  const modelRef = useRef();

  // Center the model
  useEffect(() => {
    if (modelRef.current) {
      const box = new Box3().setFromObject(modelRef.current);
      const center = new Vector3();
      box.getCenter(center);
      modelRef.current.position.sub(center); // Center the model
    }
  }, []);

 // Rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.007;
    }
  });

  return (
    <group
    {...props}
    dispose={null}
    scale={[1, 1, 1]}
    position={[-1, -1, -1]}
    rotation={[Math.PI, 0, 0]} // Rotate 180 degrees around the x-axis
    ref={modelRef}
  >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material002_0.geometry}
            material={materials["Material.002"]}
          />
          <group
            position={[0.001, -1.421, 1.468]}
            rotation={[1.386, 0, 0]}
            scale={[11.038, 11.143, 13.86]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material004_0.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material002_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Keyboard_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[0.024, -0.032, 0.48]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.976, 0.976, 0.978]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-0.01, -0.047, -0.739]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.035, 0.972, 0.968]}
          />
        </group>
      
    
  );
});

export default MacBook;
useGLTF.preload("/models/macbook_laptop.glb");
