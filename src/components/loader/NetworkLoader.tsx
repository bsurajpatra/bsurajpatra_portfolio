import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

const NetworkGraph = () => {
    const groupRef = useRef<THREE.Group>(null);
    const timeRef = useRef(0);

    // Increased node count and spread for full screen effect
    const nodeCount = 160;
    const [positions, connections] = useMemo(() => {
        const pos = new Float32Array(nodeCount * 3);
        const spread = 28;
        for (let i = 0; i < nodeCount; i++) {
            pos[i * 3] = (Math.random() - 0.5) * spread;
            pos[i * 3 + 1] = (Math.random() - 0.5) * (spread * 0.5);
            pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
        }

        const conn = [];
        const maxDist = 5;
        for (let i = 0; i < nodeCount; i++) {
            for (let j = i + 1; j < nodeCount; j++) {
                const dx = pos[i * 3] - pos[j * 3];
                const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
                const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < maxDist) {
                    conn.push({
                        start: new THREE.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]),
                        end: new THREE.Vector3(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]),
                        id: `${i}-${j}`,
                        order: Math.random() * 0.8
                    });
                }
            }
        }
        return [pos, conn];
    }, []);

    // Smooth Easing
    const easeOutQuart = (x: number) => 1 - Math.pow(1 - x, 4);

    const linePositions = useMemo(() => new Float32Array(connections.length * 6), [connections]);
    const linesRef = useRef<THREE.LineSegments>(null);

    useFrame((state) => {
        const progress = Math.min(state.clock.getElapsedTime() / 1.5, 1);
        const growthDuration = 0.2;

        if (linesRef.current) {
            const posAttr = linesRef.current.geometry.attributes.position;

            connections.forEach((c, i) => {
                const localProgress = Math.max(0, Math.min((progress - c.order) / growthDuration, 1));
                const easedProgress = easeOutQuart(localProgress);

                const currentEnd = c.start.clone().lerp(c.end, easedProgress);

                const idx = i * 6;
                // Start point
                posAttr.array[idx] = c.start.x;
                posAttr.array[idx + 1] = c.start.y;
                posAttr.array[idx + 2] = c.start.z;

                // End point (interpolated)
                posAttr.array[idx + 3] = currentEnd.x;
                posAttr.array[idx + 4] = currentEnd.y;
                posAttr.array[idx + 5] = currentEnd.z;
            });

            posAttr.needsUpdate = true;

            // Very slow rotation
            if (groupRef.current) {
                groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            }
        }
    });

    return (
        <group ref={groupRef}>
            {/* All Edges in one draw call */}
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePositions.length / 3}
                        array={linePositions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#ff2d55"
                    transparent
                    opacity={0.3}
                    blending={THREE.AdditiveBlending}
                />
            </lineSegments>

            {/* Nodes */}
            <Points positions={positions}>
                <PointMaterial
                    transparent
                    color="#00f2ff"
                    size={0.12}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};


const NetworkLoader = () => {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 20,
            pointerEvents: 'none',
            overflow: 'hidden'
        }}>
            <Canvas
                camera={{ position: [0, 0, 15], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={1} />
                <NetworkGraph />
            </Canvas>
        </div>
    );
};

export default NetworkLoader;
