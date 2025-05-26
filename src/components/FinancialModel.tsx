'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {  PresentationControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Group } from 'three';

const CoinStack = () => {
  const meshRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Gold coins stack - simplified 3D model */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 0.2, 32]} />
        <meshStandardMaterial color="#fde047" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.2, 32]} />
        <meshStandardMaterial color="#facc15" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.2, 32]} />
        <meshStandardMaterial color="#eab308" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
        <meshStandardMaterial color="#ca8a04" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.2, 32]} />
        <meshStandardMaterial color="#a16207" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
};

const FinancialModel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[300px] md:h-[400px]"
    >
      <Canvas camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 400 }}
          snap={true}
        >
          <CoinStack />
        </PresentationControls>
      </Canvas>
    </motion.div>
  );
};

export default FinancialModel;