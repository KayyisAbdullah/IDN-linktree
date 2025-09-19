import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  color: string;
  alpha: number;
}

export default function MouseParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      // Create new particles on mouse move
      for (let i = 0; i < 3; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    // Create a particle
    const createParticle = (x: number, y: number) => {
      const colors = ['#FF69B4', '#00FFFF', '#FF00FF', '#4169E1', '#7B68EE'];
      const particle: Particle = {
        x,
        y,
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        size: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1
      };
      particlesRef.current.push(particle);
    };

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.alpha -= 0.02;

        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.restore();

        // Remove particles that are no longer visible
        return particle.alpha > 0;
      });

      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999
      }}
    />
  );
}