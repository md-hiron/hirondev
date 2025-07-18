'use client';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine); // ✅ engine, not main
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        particles: {
          color: { value: '#ffffff' },
          links: {
            enable: true,
            color: '#ffffff',
            distance: 150,
            opacity: 0.2,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          number: { value: 50 },
          opacity: { value: 0.3 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
      }}
      className="absolute inset-0 w-full h-full"
    />
  );
}
