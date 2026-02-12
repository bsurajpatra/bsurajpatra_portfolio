
import React, { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html, PerspectiveCamera } from '@react-three/drei';

const FloatingItem = ({ position, icon, name, color }) => {
    const meshRef = React.useRef();
    const [hovered, setHovered] = React.useState(false);

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle rotation
            meshRef.current.rotation.x += 0.002;
            meshRef.current.rotation.y += 0.002;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <group position={position}
                ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                scale={hovered ? 1.2 : 1}
            >
                <mesh>
                    {/* Invisible hit sphere for better raycasting */}
                    <sphereGeometry args={[0.7, 16, 16]} />
                    <meshStandardMaterial transparent opacity={0.1} color={color || "white"} wireframe={hovered} />
                </mesh>

                <Html distanceFactor={6} transform position={[0, 0, 0]} style={{ pointerEvents: 'none' }}>
                    <div className="floating-skill-item" style={{
                        textAlign: 'center',
                        color: hovered ? '#ff6b6b' : (color || 'white'),
                        transition: 'all 0.3s ease',
                        transform: hovered ? 'scale(1.2)' : 'scale(1)',
                        width: '80px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.6)',
                        padding: '10px',
                        borderRadius: '10px',
                        backdropFilter: 'blur(4px)',
                        border: hovered ? '1px solid currentColor' : '1px solid transparent'
                    }}>
                        <div style={{ fontSize: '2rem', marginBottom: '5px' }}>
                            {icon}
                        </div>
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{name}</span>
                    </div>
                </Html>
            </group>
        </Float>
    );
};

const FloatingSkills = ({ skills }) => {
    // Flatten skills and categorize by category color if possible, or just flatten.
    const allSkills = useMemo(() => {
        return skills.flatMap(category =>
            category.items.map(item => ({
                ...item,
                categoryColor: '#fff', // Could extract color from category loop if needed
                // Parse color from the icon prop if possible? Hard. 
                // We'll just rely on the icon itself having color.
            }))
        );
    }, [skills]);

    // Generate random positions in a sphere
    const positions = useMemo(() => {
        const temp = [];
        const count = allSkills.length;
        const radius = 6;

        for (let i = 0; i < count; i++) {
            // Golden spiral or random sphere distribution
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);

            temp.push([x, y, z]);
        }
        return temp;
    }, [allSkills]);

    return (
        <div style={{ height: '600px', width: '100%', position: 'relative' }}>
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={50} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <group rotation={[0, 0, 0]}>
                    {allSkills.map((skill, i) => (
                        <FloatingItem
                            key={i}
                            position={positions[i]}
                            icon={skill.icon}
                            name={skill.name}
                            color={skill.categoryColor}
                        />
                    ))}
                </group>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>

            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'rgba(255,255,255,0.5)',
                pointerEvents: 'none'
            }}>
                <small>Drag to rotate • Hover to explore</small>
            </div>
        </div>
    );
};

export default FloatingSkills;
