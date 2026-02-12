
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Position
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Velocity-based stretching
    const x = useSpring(mouseX, { damping: 20, stiffness: 200 });
    const y = useSpring(mouseY, { damping: 20, stiffness: 200 });

    const velocityRef = useRef({ x: 0, y: 0, lastPos: { x: 0, y: 0 } });

    useEffect(() => {
        const moveMouse = (e) => {
            const dx = e.clientX - velocityRef.current.lastPos.x;
            const dy = e.clientY - velocityRef.current.lastPos.y;

            velocityRef.current.x = dx;
            velocityRef.current.y = dy;
            velocityRef.current.lastPos = { x: e.clientX, y: e.clientY };

            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, .interactive, .skills__pill, [role="button"], .floating-skill-item')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY, isVisible]);

    // Calculate rotation and stretch based on velocity
    const rotate = useTransform([mouseX, mouseY], () => {
        const angle = Math.atan2(velocityRef.current.y, velocityRef.current.x) * (180 / Math.PI);
        return `${angle}deg`;
    });

    const scaleX = useTransform([mouseX, mouseY], () => {
        const velocity = Math.sqrt(velocityRef.current.x ** 2 + velocityRef.current.y ** 2);
        return 1 + Math.min(velocity / 100, 1.5); // Stretch up to 2.5x
    });

    const scaleY = useTransform([mouseX, mouseY], () => {
        const velocity = Math.sqrt(velocityRef.current.x ** 2 + velocityRef.current.y ** 2);
        return 1 - Math.min(velocity / 200, 0.5); // Shrink up to 0.5x
    });

    if (!isVisible) return null;

    return (
        <div className="cursor-container">
            <motion.div
                className="cursor-liquid"
                style={{
                    x,
                    y,
                    rotate,
                    scaleX,
                    scaleY,
                    marginLeft: isHovered ? -30 : -6,
                    marginTop: isHovered ? -30 : -6,
                }}
                animate={{
                    width: isHovered ? 60 : 12,
                    height: isHovered ? 60 : 12,
                    borderRadius: isHovered ? "20%" : "50%",
                    backgroundColor: isHovered ? 'var(--title-color)' : 'var(--title-color)',
                    opacity: isHovered ? 0.2 : 1,
                }}
                transition={{
                    borderRadius: { duration: 0.3 },
                    width: { duration: 0.2 },
                    height: { duration: 0.2 },
                }}
            />
        </div>
    );
};

export default CustomCursor;
