import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const SquareSwitch = ({ isDark, onClick }: { isDark: boolean; onClick: () => void }) => {
  return (
    <group onClick={onClick}>
      {/* Main switch plate - larger and more visible */}
      <mesh position={[0, 0, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[3.5, 3.5, 0.3]} />
        <meshStandardMaterial 
          color={isDark ? "#1e293b" : "#f8fafc"} 
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>

      {/* Border frame */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[3.7, 3.7, 0.1]} />
        <meshStandardMaterial 
          color={isDark ? "#0f172a" : "#e2e8f0"} 
          roughness={0.4}
          metalness={0.3}
        />
      </mesh>

      {/* Button base */}
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[2.2, 2.2, 0.2]} />
        <meshStandardMaterial 
          color={isDark ? "#334155" : "#cbd5e1"} 
          roughness={0.5}
        />
      </mesh>

      {/* Pressable button with smooth transition */}
      <group position={[0, 0, isDark ? 0.25 : 0.35]}>
        <mesh castShadow>
          <boxGeometry args={[2, 2, 0.3]} />
          <meshStandardMaterial 
            color={isDark ? "#10b981" : "#64748b"} 
            roughness={0.3}
            metalness={0.2}
            emissive={isDark ? "#10b981" : "#000000"}
            emissiveIntensity={isDark ? 0.3 : 0}
          />
        </mesh>

        {/* Button top highlight */}
        <mesh position={[0, 0, 0.16]}>
          <boxGeometry args={[1.8, 1.8, 0.01]} />
          <meshStandardMaterial 
            color="#ffffff"
            transparent
            opacity={0.2}
          />
        </mesh>
      </group>

      {/* "1" marking - ON position (top) */}
      <Text
        position={[0, 1.4, 0.05]}
        fontSize={0.5}
        color={isDark ? "#10b981" : "#64748b"}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        1
      </Text>

      {/* "0" marking - OFF position (bottom) */}
      <Text
        position={[0, -1.4, 0.05]}
        fontSize={0.5}
        color={isDark ? "#64748b" : "#94a3b8"}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter-bold.woff"
      >
        0
      </Text>

      {/* Status indicator light */}
      <mesh position={[1.3, 1.3, 0.1]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial 
          color={isDark ? "#10b981" : "#94a3b8"}
          emissive={isDark ? "#10b981" : "#000000"}
          emissiveIntensity={isDark ? 1 : 0}
        />
      </mesh>
      
      {/* LED glow effect */}
      {isDark && (
        <pointLight position={[1.3, 1.3, 0.5]} color="#10b981" intensity={1} distance={3} />
      )}
    </group>
  );
};

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 w-40 h-40 cursor-pointer">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        shadows
      >
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[8, 8, 8]} 
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <spotLight position={[-5, 5, 5]} intensity={0.4} />
        <pointLight position={[0, 0, 5]} intensity={0.3} />
        
        <SquareSwitch isDark={isDark} onClick={toggleTheme} />
      </Canvas>
    </div>
  );
};

export default ThemeToggle;
