import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { Environment } from "@react-three/drei";

function GlassHandle({ text, size }) {
  const meshRef = useRef(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group scale={viewport.width / 11}>
      <Text fontSize={size} position={[0, 0, 0]}>
        {text}
      </Text>
      <mesh ref={meshRef}>
        <torusGeometry args={[1, 0.4, 16, 60]} />
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0.2}
          transmission={1}
          ior={1}
          chromaticAberration={0.5}
          backside={true}
        />
      </mesh>
    </group>
  );
}

export const GlassEffect = ({ text = "sitaram", size = 1.3 }) => {
  return (
    <Canvas
      style={{ height: "100vh", width: "100%", background: "black" }}
      camera={{ fov: 55 }}
    >
      <directionalLight intensity={3} position={[0, 0, 0]} />
      <Environment preset="city" />
      <GlassHandle text={text} size={size} />
    </Canvas>
  );
};
