import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const OutletSwitch = ({ isDark, onClick }: { isDark: boolean; onClick: () => void }) => {
  return (
    <group onClick={onClick}>
      {/* Outlet plate */}
      <mesh position={[0, 0, -0.1]}>
        <boxGeometry args={[2, 2.8, 0.15]} />
        <meshStandardMaterial 
          color={isDark ? "#4a5568" : "#e2e8f0"} 
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Plate screws - top */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.2, 0.025]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.15, 0.02, 0.01]} />
        <meshStandardMaterial color="#64748b" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Plate screws - bottom */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 16]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0, -1.2, 0.025]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.15, 0.02, 0.01]} />
        <meshStandardMaterial color="#64748b" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Switch housing recess */}
      <mesh position={[0, 0, -0.02]}>
        <boxGeometry args={[1.3, 1.8, 0.1]} />
        <meshStandardMaterial 
          color={isDark ? "#2d3748" : "#cbd5e1"} 
          roughness={0.6}
        />
      </mesh>

      {/* Switch lever */}
      <group position={[0, isDark ? 0.3 : -0.3, 0.1]}>
        <mesh>
          <boxGeometry args={[0.8, 1.1, 0.2]} />
          <meshStandardMaterial 
            color={isDark ? "#4a5568" : "#f1f5f9"} 
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
        
        {/* Lever highlight */}
        <mesh position={[0, 0.3, 0.11]}>
          <boxGeometry args={[0.6, 0.2, 0.01]} />
          <meshStandardMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.3}
          />
        </mesh>

        {/* Grip lines */}
        {[-0.15, 0, 0.15].map((y, i) => (
          <mesh key={i} position={[0, y, 0.11]}>
            <boxGeometry args={[0.6, 0.03, 0.01]} />
            <meshStandardMaterial color={isDark ? "#64748b" : "#94a3b8"} />
          </mesh>
        ))}
      </group>

      {/* ON/OFF labels */}
      <mesh position={[-0.5, 0.7, 0.02]}>
        <planeGeometry args={[0.2, 0.1]} />
        <meshBasicMaterial color={isDark ? "#94a3b8" : "#64748b"} />
      </mesh>
      <mesh position={[-0.5, -0.7, 0.02]}>
        <planeGeometry args={[0.2, 0.1]} />
        <meshBasicMaterial color={isDark ? "#94a3b8" : "#64748b"} />
      </mesh>

      {/* Indicator LED */}
      <mesh position={[0.7, 0.9, 0.02]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color={isDark ? "#10b981" : "#9ca3af"}
          emissive={isDark ? "#10b981" : "#000000"}
          emissiveIntensity={isDark ? 0.8 : 0}
        />
      </mesh>
      {isDark && (
        <pointLight position={[0.7, 0.9, 0.3]} color="#10b981" intensity={0.5} distance={2} />
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
    <div className="fixed top-6 right-6 z-50 w-32 h-40 cursor-pointer">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        shadows
      >
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <spotLight position={[-5, 5, 5]} intensity={0.3} />
        
        <OutletSwitch isDark={isDark} onClick={toggleTheme} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-0.3}
          maxAzimuthAngle={0.3}
        />
      </Canvas>
    </div>
  );
};

export default ThemeToggle;
