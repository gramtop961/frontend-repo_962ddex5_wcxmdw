import React from 'react';

export default function OrnamentDivider() {
  return (
    <div className="my-6 flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-[#B85C50]/40" />
      <Star className="h-5 w-5" color="#D4AF37" />
      <span className="h-px w-16 bg-[#B85C50]/40" />
    </div>
  );
}

function Star({ className = '', color = '#D4AF37' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2.5l2.9 6.02 6.65.63-5.03 4.27 1.52 6.55L12 16.92 5.96 20l1.52-6.55L2.46 9.15l6.65-.63L12 2.5z" />
    </svg>
  );
}
