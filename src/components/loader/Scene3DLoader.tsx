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
                    color="hsl(353, 100%, 65%)"
                    emissive="hsl(353, 100%, 65%)"
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

            <pointLight intensity={10} color="hsl(353, 100%, 65%)" distance={10} />
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

const DataLines = ({ count }: { count: number }) => {
    return (
        <Sparkles 
            count={count} 
            scale={4} 
            size={2} 
            speed={0.5} 
            color="hsl(353, 100%, 65%)" 
            opacity={0.5}
        />
    );
};

const Scene3DLoader = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const caOffset = useMemo(() => new Vector2(0.001, 0.001), []);

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
                gl={{ 
                    alpha: true, 
                    antialias: false,
                    powerPreference: 'high-performance',
                    precision: 'lowp'
                }} 
                dpr={isMobile ? [1, 1] : [1, 2]}
            >
                <ambientLight intensity={0.1} />
                <pointLight position={[5, 5, 5]} intensity={2} color="hsl(353, 100%, 65%)" />

                <ResponsiveCamera />

                <Float speed={isMobile ? 2 : 4} rotationIntensity={0.5} floatIntensity={0.5}>
                    <PulsingCore />
                    <EnergyRing radius={1.4} speed={1.2} color="hsl(353, 100%, 65%)" />
                    {!isMobile && (
                        <>
                            <EnergyRing radius={1.6} speed={-0.8} color="hsl(353, 100%, 45%)" rotationOffset={[Math.PI / 4, 0, 0]} />
                            <EnergyRing radius={1.8} speed={1.5} color="hsl(353, 100%, 65%)" rotationOffset={[-Math.PI / 4, 0, 0]} />
                        </>
                    )}
                    <DataLines count={isMobile ? 40 : 100} />
                </Float>

                {!isMobile ? (
                    <EffectComposer enableNormalPass={false}>
                        <Bloom 
                            intensity={1.2} 
                            luminanceThreshold={0.2} 
                            luminanceSmoothing={0.5} 
                        />
                        <ChromaticAberration offset={caOffset} />
                        <Noise opacity={0.04} />
                        <Scanline opacity={0.1} />
                    </EffectComposer>
                ) : (
                    <EffectComposer enableNormalPass={false}>
                        <Bloom intensity={0.5} luminanceThreshold={0.8} />
                    </EffectComposer>
                )}
            </Canvas>
        </div>
    );
};

// Component to handle responsive camera positioning
const ResponsiveCamera = () => {
    useFrame((state) => {
        const aspect = state.viewport.aspect;
        const targetZ = aspect < 1 ? 12 : 8;
        
        state.camera.position.z += (targetZ - state.camera.position.z) * 0.1;
        state.camera.updateProjectionMatrix();
    });
    return null;
};

export default Scene3DLoader;
