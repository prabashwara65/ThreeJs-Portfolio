"use client"

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Macbook(props) {
  const { nodes, materials } = useGLTF('/models/macbook-laptop.glb')
  const modelRef = useRef()

  useFrame((state, delta, XRFrame) => {
    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime) * 0.15
  })

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <group scale={0.01}>
        <group
          position={[667.854, 40.894, 204.642]}
          rotation={[Math.PI, 0, 0]}
          scale={[9.059, 7.172, 9.059]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material002_0.geometry}
            material={materials['Material.002']}
          />
          <group
            position={[0.001, -1.421, 1.468]}
            rotation={[1.386, 0, 0]}
            scale={[11.038, 11.143, 13.86]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material004_0.geometry}
              material={materials['Material.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material002_0.geometry}
              material={materials['Material.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Keyboard_Material001_0.geometry}
            material={materials['Material.001']}
            position={[0.024, -0.032, 0.48]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.976, 0.976, 0.978]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Material002_0.geometry}
            material={materials['Material.002']}
            position={[-0.01, -0.047, -0.739]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[1.035, 0.972, 0.968]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/macbook-laptop.glb')
