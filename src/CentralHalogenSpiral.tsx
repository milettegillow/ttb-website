import { useEffect, useState } from 'react';

export default function Events() {
  const [scrollPos, setScrollPos] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const yRotation = (scrollPos * 0.2) % 360;

  const generateSpiralPath = () => {
    const totalPoints = 200;
    const loops = 4;
    const amplitude = 20;
    const verticalSpan = 500;  // This controls the total height of the spiral
    const points = [];

    for (let i = 0; i < totalPoints; i++) {
      const phase = (i / totalPoints) * Math.PI * 2 * loops;
      const radius = amplitude + Math.sin(phase) * 5; // Small variation in radius
      const x = Math.sin(phase) * radius;
      const z = Math.cos(phase) * radius;      
      const y = (i / totalPoints) * verticalSpan;
      points.push({ x, y, z });
    }

    return points
      .map((pt, i) => (i === 0 ? `M ${pt.x} ${pt.y}` : `L ${pt.x} ${pt.y}`))
      .join(' ');
  };

  const spiralPath = generateSpiralPath();

  return (
    <div className="bg-gray-900 min-h-screen relative">
      {/* Fixed halogen spiral overlay */}
      <div
        style={{
          position: 'fixed',
          top: '60%',
          left: '50%',
          transform: `translate(-50%, -50%) rotateY(${yRotation}deg)`,
          transformStyle: 'preserve-3d',
          zIndex: 50,
          pointerEvents: 'none', // let clicks and scroll events pass through
        }}
      >
        <svg
          width="300"
          height="100vh"  // Set height to 100% of viewport height
          viewBox="-50 0 100 500"  // Ensure this matches the vertical span
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2" result="blur1" />
              <feGaussianBlur stdDeviation="4" result="blur2" />
              <feMerge>
                <feMergeNode in="blur2" />
                <feMergeNode in="blur1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="tubeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(250, 122, 201)" />
              <stop offset="50%" stopColor="rgb(239, 31, 159)" />
              <stop offset="100%" stopColor="rgba(0, 255, 255, 0.3)" />
            </linearGradient>
          </defs>
          {/* Spiral Path with neon glow */}
          <path
            d={spiralPath}
            stroke="url(#tubeGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
          />
          {/* Inner bright core */}
          <path
            d={spiralPath}
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
