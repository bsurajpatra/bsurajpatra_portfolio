import React, { useEffect, useRef } from 'react';
import './Shapes.css';

const Shapes = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        const gridSpacing = 60; // Increased spacing for a 'wider' feel
        const binaries = [];
        const binaryCount = 35; // Slightly fewer but larger
        const circuits = [];
        const circuitCount = 12;

        class BinaryStream {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.floor(Math.random() * (canvas.width / gridSpacing)) * gridSpacing;
                this.y = Math.random() * canvas.height;
                this.speed = Math.random() * 2 + 1;
                this.chars = Array.from({ length: 12 }, () => Math.round(Math.random()).toString());
                this.opacity = Math.random() * 0.4 + 0.1;
                this.fontSize = Math.floor(Math.random() * 10) + 16; // Increased font size
            }

            update() {
                this.y += this.speed;
                if (this.y > canvas.height + 250) {
                    this.reset();
                    this.y = -150;
                }
            }

            draw() {
                ctx.font = `bold ${this.fontSize}px 'Courier New'`; // Added bold
                ctx.fillStyle = `rgba(108, 108, 229, ${this.opacity})`;
                this.chars.forEach((char, i) => {
                    ctx.fillText(char, this.x, this.y - (i * 22));
                });
            }
        }

        class CircuitLine {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.floor(Math.random() * (canvas.width / gridSpacing)) * gridSpacing;
                this.y = Math.floor(Math.random() * (canvas.height / gridSpacing)) * gridSpacing;
                this.length = Math.random() * 150 + 100; // Increased length
                this.speed = Math.random() * 2 + 1.5;
                this.direction = Math.random() > 0.5 ? 'h' : 'v';
                this.progress = 0;
                this.opacity = Math.random() * 0.7 + 0.3;
            }

            update() {
                this.progress += this.speed;
                if (this.progress > this.length + 600) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.shadowBlur = 15; // Increased glow
                ctx.shadowColor = 'rgba(108, 108, 229, 0.9)';
                ctx.strokeStyle = `rgba(108, 108, 229, ${this.opacity})`;
                ctx.lineWidth = 4; // Increased line width

                if (this.direction === 'h') {
                    ctx.moveTo(this.x + this.progress - 70, this.y);
                    ctx.lineTo(this.x + this.progress, this.y);
                } else {
                    ctx.moveTo(this.x, this.y + this.progress - 70);
                    ctx.lineTo(this.x, this.y + this.progress);
                }
                ctx.stroke();
                ctx.shadowBlur = 0;
            }
        }

        for (let i = 0; i < binaryCount; i++) binaries.push(new BinaryStream());
        for (let i = 0; i < circuitCount; i++) circuits.push(new CircuitLine());


        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            binaries.forEach(b => {
                b.update();
                b.draw();
            });

            circuits.forEach(c => {
                c.update();
                c.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="shapes">
            <canvas
                ref={canvasRef}
                className="home__bg-canvas"
            />
        </div>
    );
};

export default Shapes;