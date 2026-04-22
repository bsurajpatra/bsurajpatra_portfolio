import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, Stars, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing';
import * as THREE from 'three';

const DNAStrand = () => {
    const groupRef = useRef<THREE.Group>(null);
    const { viewport } = useThree();
    
    // Scale based on screen size
    const isMobile = viewport.width < 10;
    const count = isMobile ? 30 : 45;
    const radius = isMobile ? 0.8 : 1.2;
    const width = viewport.width * 0.8; // Use 80% of viewport width
    const twist = Math.PI * 4;

    const basePairs = useMemo(() => {
        const pairs = [];
        for (let i = 0; i < count; i++) {
            const t = (i / count) * twist;
            const x = (i / count) * width - width / 2;
            
            const y1 = radius * Math.cos(t);
            const z1 = radius * Math.sin(t);
            
            const y2 = radius * Math.cos(t + Math.PI);
            const z2 = radius * Math.sin(t + Math.PI);
            
            pairs.push({
                pos1: [x, y1, z1],
                pos2: [x, y2, z2],
                color: i % 2 === 0 ? "#ff2d55" : "#00f2ff"
            });
        }
        return pairs;
    }, [count, radius, width]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.x = time * 0.8; 
        }
    });

    return (
        <group ref={groupRef}>
            {basePairs.map((pair, i) => (
                <group key={i}>
                    <Sphere args={[isMobile ? 0.08 : 0.1, 8, 8]} position={pair.pos1 as any}>
                        <meshStandardMaterial color={pair.color} emissive={pair.color} emissiveIntensity={6} />
                    </Sphere>
                    <Sphere args={[isMobile ? 0.08 : 0.1, 8, 8]} position={pair.pos2 as any}>
                        <meshStandardMaterial color={pair.color} emissive={pair.color} emissiveIntensity={6} />
                    </Sphere>
                    <mesh position={[pair.pos1[0], 0, 0] as any} rotation={[(i / count) * twist, 0, 0] as any}>
                        <cylinderGeometry args={[0.015, 0.015, radius * 2, 8]} />
                        <meshStandardMaterial color={pair.color} transparent opacity={0.4} emissive={pair.color} emissiveIntensity={4}/>
                    </mesh>
                </group>
            ))}
        </group>
    );
};

const DNALoader = () => {
    return (
        <div style={{ 
            width: '100vw', 
            height: '100vh', 
            position: 'absolute', 
            top: 0, 
            left: 0,
            zIndex: 20,
            pointerEvents: 'none'
        }}>
            <Canvas 
                camera={{ position: [0, 0, 10], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 2]} // Performance optimization for mobile
            >
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                
                <DNAStrand />

                <EffectComposer enableNormalPass={false}>
                    <Bloom intensity={1.5} luminanceThreshold={0.1} />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default DNALoader;
