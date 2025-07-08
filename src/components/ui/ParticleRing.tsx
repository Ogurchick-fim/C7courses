// src/components/ui/ParticleRing.tsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter, PointType } from "../../lib/utils"; // Updated import
import { Group, Vector3 } from "three";

const ParticleRing = () => (
  <Canvas
    camera={{ position: [10, -7.5, -5], fov: 75 }}
    style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'transparent',
      zIndex: 0
    }}
  >
    <OrbitControls 
      maxDistance={20} 
      minDistance={10} 
      enableZoom={true}
      enablePan={false}
    />
    <ambientLight intensity={0.8} />
    <pointLight position={[-30, 0, -30]} power={15.0} />
    <PointCircle />
  </Canvas>
);

const PointCircle = () => {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {[...pointsInner, ...pointsOuter].map((point: PointType) => (
        <Point 
          key={point.idx} 
          position={point.position} 
          color={point.color} 
        />
      ))}
    </group>
  );
};

interface PointProps {
  position: [number, number, number];
  color: string;
}

const Point = ({ position, color }: PointProps) => (
  <Sphere position={new Vector3(...position)} args={[0.1, 10, 10]}>
    <meshStandardMaterial
      emissive={color}
      emissiveIntensity={0.5}
      roughness={0.5}
      color={color}
    />
  </Sphere>
);

export default ParticleRing;