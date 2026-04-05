
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const PulsingCore = () => {
    const coreRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (coreRef.current) {
            coreRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
        }
    });

    return (
        <group>
            {/* Main Glowing Core */}
            <Sphere args={[1, 64, 64]} ref={coreRef}>
                <MeshDistortMaterial
                    color="#00f3ff"
                    emissive="#00f3ff"
                    emissiveIntensity={2}
                    speed={2}
                    distort={0.4}
                    radius={1}
                />
            </Sphere>

            {/* Inner Glow Sphere */}
            <Sphere args={[0.8, 32, 32]}>
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#ffffff"
                    emissiveIntensity={5}
                />
            </Sphere>

            {/* Point light inside the core */}
            <pointLight intensity={2} color="#00f3ff" />
        </group>
    );
};

const Ring = ({ radius, speed, color, dash }) => {
    const ringRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (ringRef.current) {
            ringRef.current.rotation.z = time * speed;
            ringRef.current.rotation.x = time * (speed * 0.5);
        }
    });

    return (
        <mesh ref={ringRef}>
            <torusGeometry args={[radius, 0.02, 16, 100]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={1}
                transparent
                opacity={0.6}
            />
        </mesh>
    );
};

const EnergyParticles = () => {
    const pointsRef = useRef();
    const count = 50;

    const positions = React.useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const r = 1.5 + Math.random() * 0.5;
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += 0.01;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="#00f3ff" transparent opacity={0.8} />
        </points>
    );
};

const Scene3DLoader = () => {
    return (
        <div style={{ width: '100%', height: 'min(50vh, 500px)', position: 'relative' }}>
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <Float speed={3} rotationIntensity={1} floatIntensity={1}>
                    <PulsingCore />
                    <Ring radius={1.5} speed={0.5} color="#ff0080" />
                    <Ring radius={1.8} speed={-0.3} color="#00f3ff" />
                    <Ring radius={2.1} speed={0.8} color="#ffffff" />
                    <EnergyParticles />
                </Float>
            </Canvas>
        </div>
    );
};

export default Scene3DLoader;
