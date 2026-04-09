import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Noise, Scanline } from '@react-three/postprocessing';
import { Vector2 } from 'three';

const PulsingCore = () => {
    const coreRef = useRef<any>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (coreRef.current) {
            coreRef.current.scale.setScalar(1 + Math.sin(time * 4) * 0.05);
            coreRef.current.rotation.y = time * 0.5;
        }
    });

    return (
        <group>
            {/* Main Glowing Core - Reactor style */}
            <Sphere args={[1, 64, 64]} ref={coreRef}>
                <MeshDistortMaterial
                    color="#00f3ff"
                    emissive="#00f3ff"
                    emissiveIntensity={10}
                    speed={5}
                    distort={0.3}
                    radius={1}
                />
            </Sphere>

            {/* Inner Power Source */}
            <Sphere args={[0.6, 32, 32]}>
                <meshStandardMaterial
                    color="#fff"
                    emissive="#fff"
                    emissiveIntensity={20}
                />
            </Sphere>

            <pointLight intensity={10} color="#00f3ff" distance={10} />
        </group>
    );
};

const EnergyRing = ({ radius, speed, color, rotationOffset = [0, 0, 0] }: any) => {
    const ringRef = useRef<any>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (ringRef.current) {
            ringRef.current.rotation.z = time * speed;
            ringRef.current.rotation.x += 0.01;
        }
    });

    return (
        <mesh ref={ringRef} rotation={rotationOffset}>
            <torusGeometry args={[radius, 0.015, 16, 100]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={5}
                transparent
                opacity={0.8}
            />
        </mesh>
    );
};

const DataLines = () => {
    return (
        <Sparkles 
            count={100} 
            scale={4} 
            size={2} 
            speed={0.5} 
            color="#00f3ff" 
            opacity={0.5}
        />
    );
};

const Scene3DLoader = () => {
    return (
        <div style={{ 
            width: '100vw', 
            height: '100vh', 
            position: 'absolute', 
            top: 0, 
            left: 0,
            zIndex: 1
        }}>
            <Canvas 
                camera={{ position: [0, 0, 8], fov: 45 }} 
                gl={{ alpha: true, antialias: false }} // Scale performance for mobile
                dpr={[1, 2]} // Limit pixel ratio for performance
            >
                <ambientLight intensity={0.1} />
                <pointLight position={[5, 5, 5]} intensity={2} color="#00f3ff" />

                <ResponsiveCamera />

                <Float speed={4} rotationIntensity={0.5} floatIntensity={0.5}>
                    <PulsingCore />
                    <EnergyRing radius={1.4} speed={1.2} color="#00f3ff" />
                    <EnergyRing radius={1.6} speed={-0.8} color="#ff0080" rotationOffset={[Math.PI / 4, 0, 0]} />
                    <EnergyRing radius={1.8} speed={1.5} color="#00f3ff" rotationOffset={[-Math.PI / 4, 0, 0]} />
                    <DataLines />
                </Float>

                <EffectComposer enableNormalPass={false}>
                    <Bloom 
                        intensity={1.2} 
                        luminanceThreshold={0.2} 
                        luminanceSmoothing={0.5} 
                    />
                    <ChromaticAberration offset={new Vector2(0.001, 0.001)} />
                    <Noise opacity={0.04} />
                    <Scanline opacity={0.1} />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

// Component to handle responsive camera positioning
const ResponsiveCamera = () => {
    useFrame((state) => {
        const aspect = state.viewport.aspect;
        // Adjust camera Z based on aspect ratio (portrait vs landscape)
        const targetZ = aspect < 1 ? 10 : 8;
        
        // Smoothly interpolate for a premium feel
        state.camera.position.z += (targetZ - state.camera.position.z) * 0.1;
        state.camera.updateProjectionMatrix();
    });
    return null;
};

export default Scene3DLoader;
