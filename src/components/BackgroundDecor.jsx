import React from 'react';

export default function BackgroundDecor({ children }) {
  const patternStyle = {
    backgroundImage:
      'radial-gradient(rgba(184,92,80,0.06) 1px, transparent 1px), radial-gradient(rgba(212,175,55,0.10) 1px, transparent 1px)',
    backgroundPosition: '0 0, 25px 25px',
    backgroundSize: '50px 50px',
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ backgroundColor: '#FFF9F0', ...patternStyle }}
    >
      {children}
    </div>
  );
}
