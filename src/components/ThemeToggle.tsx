import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const SquareSwitch = ({ isDark }: { isDark: boolean }) => {
  return (
    <group>
      {/* Main switch plate - large and visible */}
      <mesh position={[0, 0, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[4, 4, 0.4]} />
        <meshStandardMaterial 
          color={isDark ? "#1e293b" : "#f8fafc"} 
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>

      {/* Border frame */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[4.3, 4.3, 0.15]} />
        <meshStandardMaterial 
          color={isDark ? "#0f172a" : "#cbd5e1"} 
          roughness={0.4}
          metalness={0.4}
        />
      </mesh>

      {/* Button base recess */}
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[2.5, 2.5, 0.25]} />
        <meshStandardMaterial 
          color={isDark ? "#334155" : "#94a3b8"} 
          roughness={0.6}
        />
      </mesh>

      {/* Pressable button with smooth transition */}
      <group position={[0, 0, isDark ? 0.3 : 0.45]}>
        <mesh castShadow>
          <boxGeometry args={[2.3, 2.3, 0.4]} />
          <meshStandardMaterial 
            color={isDark ? "#10b981" : "#475569"} 
            roughness={0.3}
            metalness={0.2}
            emissive={isDark ? "#10b981" : "#000000"}
            emissiveIntensity={isDark ? 0.4 : 0}
          />
        </mesh>

        {/* Button top highlight */}
        <mesh position={[0, 0, 0.21]}>
          <boxGeometry args={[2.1, 2.1, 0.01]} />
          <meshStandardMaterial 
            color="#ffffff"
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>

      {/* "1" marking - ON (top) using simple geometry */}
      <mesh position={[0, 1.6, 0.05]}>
        <boxGeometry args={[0.15, 0.6, 0.02]} />
        <meshStandardMaterial 
          color={isDark ? "#10b981" : "#475569"}
          emissive={isDark ? "#10b981" : "#000000"}
          emissiveIntensity={isDark ? 0.3 : 0}
        />
      </mesh>

      {/* "0" marking - OFF (bottom) using ring geometry */}
      <mesh position={[0, -1.6, 0.05]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.3, 0.08, 16, 32]} />
        <meshStandardMaterial 
          color={isDark ? "#475569" : "#64748b"}
        />
      </mesh>

      {/* Status indicator LED */}
      <mesh position={[1.5, 1.5, 0.15]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial 
          color={isDark ? "#10b981" : "#64748b"}
          emissive={isDark ? "#10b981" : "#000000"}
          emissiveIntensity={isDark ? 1.2 : 0}
        />
      </mesh>
      
      {/* LED glow effect */}
      {isDark && (
        <pointLight position={[1.5, 1.5, 0.8]} color="#10b981" intensity={2} distance={4} />
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
    <div 
      className="fixed top-8 right-8 z-50 w-48 h-48 cursor-pointer bg-transparent"
      onClick={toggleTheme}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 40 }}
        shadows
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <spotLight position={[-8, 8, 8]} intensity={0.5} />
        <pointLight position={[0, 0, 8]} intensity={0.4} color="#60a5fa" />
        
        <SquareSwitch isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default ThemeToggle;
