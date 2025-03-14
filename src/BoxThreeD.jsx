import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function CubeHandle({ showThis, boxColor }) {
  const meshRef = useRef(null);
  const textures =
    showThis.length > 0 ? useLoader(TextureLoader, showThis) : null;

  useFrame((state, delta) => {
    if (meshRef.current) {
      const rotationSpeed = delta * 0.2;
      meshRef.current.rotation.y += rotationSpeed;
      meshRef.current.rotation.z += rotationSpeed;
      meshRef.current.rotation.x += rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      {textures
        ? textures.map((texture, index) => (
            <meshStandardMaterial
              key={index}
              map={texture}
              attach={`material-${index}`}
            />
          ))
        : Array.from({ length: 6 }).map((_, index) => (
            <meshStandardMaterial
              key={index}
              color={boxColor}
              attach={`material-${index}`}
            />
          ))}
    </mesh>
  );
}

export const BoxThreeD = ({ show = [], boxColor = "orange" }) => {
  return (
    <Canvas
      style={{ height: "100vh", width: "100%" }}
      camera={{ position: [5, 5, 5], fov: 55 }}
    >
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 1, 1]} intensity={1} />
      <CubeHandle showThis={show} boxColor={boxColor} />
    </Canvas>
  );
};
