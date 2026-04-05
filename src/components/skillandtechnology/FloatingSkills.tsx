
import React, { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Html, PerspectiveCamera } from '@react-three/drei';

const FloatingItem = ({ position, icon, name, color }: any) => {
    const meshRef = React.useRef<any>(null);
    const [hovered, setHovered] = React.useState(false);

    // Remove internal rotation to keep items stable
    useFrame((state) => {
        if (meshRef.current && hovered) {
            // Optional: small hover animation if desired, but keeping it stable for now
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <group position={position} ref={meshRef} scale={hovered ? 1.1 : 1}>
                <mesh
                    onPointerOver={(e) => {
                        e.stopPropagation();
                        setHovered(true);
                    }}
                    onPointerOut={() => setHovered(false)}
                >
                    {/* Invisible hit sphere for better raycasting */}
                    <sphereGeometry args={[0.8, 16, 16]} />
                    <meshBasicMaterial transparent opacity={0} />
                </mesh>

                {/* Removed 'transform' to make it always face the camera (billboard effect) */}
                <Html 
                    distanceFactor={10} 
                    position={[0, 0, 0]} 
                    center
                    style={{ 
                        pointerEvents: 'auto', // Allowed events for hover
                        whiteSpace: 'nowrap'
                    }}
                >
                    <div className="floating-skill-item" style={{
                        textAlign: 'center',
                        color: hovered ? '#ff6b6b' : (color || 'white'),
                        transition: 'all 0.3s ease',
                        transform: hovered ? 'scale(1.1)' : 'scale(1)',
                        width: 'auto',
                        minWidth: '80px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0,0,0,0.7)',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        backdropFilter: 'blur(8px)',
                        border: hovered ? '2px solid #ff6b6b' : '1px solid rgba(255,255,255,0.1)',
                        boxShadow: hovered ? '0 0 20px rgba(255,107,107,0.4)' : 'none',
                        userSelect: 'none'
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                            {icon}
                        </div>
                        <span style={{ 
                            fontSize: '0.9rem', 
                            fontWeight: '600',
                            letterSpacing: '0.5px'
                        }}>{name}</span>
                    </div>
                </Html>
            </group>
        </Float>
    );
};

const FloatingSkills = ({ skills }: any) => {
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
