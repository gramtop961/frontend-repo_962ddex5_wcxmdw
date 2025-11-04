import React from 'react';

export default function SiteFooter() {
  return (
    <footer className="mt-8 w-full py-8 text-center" style={{ backgroundColor: '#8B6F5C', color: '#FFF9F0' }}>
      <p className="text-sm">© {new Date().getFullYear()} Gereja Kita. All rights reserved.</p>
      <p className="mt-1 text-xs tracking-widest">“More Than Conquerors”</p>
    </footer>
  );
}
