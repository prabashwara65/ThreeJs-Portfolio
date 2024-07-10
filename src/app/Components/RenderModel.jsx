"use client"
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import React, { Suspense } from 'react';

const RenderModel = ({ children, className }) => {
  return (
    <div className="w-screen h-screen relative z-5">
      <Canvas className={clsx("w-full h-full", className)}>
        <Suspense >
          {children}
        </Suspense>
        <Environment preset='forest' />
      </Canvas>
    </div>
  );
}

export default RenderModel;
