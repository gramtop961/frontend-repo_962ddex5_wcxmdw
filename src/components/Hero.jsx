import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black">
      {/* 3D Spline Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (don't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="text-white">
          <p className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs tracking-wider backdrop-blur">You're Invited</p>
          <h1 className="font-semibold leading-tight text-4xl sm:text-5xl md:text-6xl">
            Christmas Celebration
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Join us for a cozy evening filled with joy, music, and festive cheer.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/90">
            <span className="rounded-md bg-white/10 px-3 py-1 backdrop-blur">December 25</span>
            <span className="rounded-md bg-white/10 px-3 py-1 backdrop-blur">6:00 PM</span>
            <span className="rounded-md bg-white/10 px-3 py-1 backdrop-blur">123 Snowflake Ave, Wintertown</span>
          </div>
          <a
            href="#rsvp"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-3 font-medium text-white shadow-lg shadow-red-500/30 transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            RSVP Now
          </a>
        </div>
      </div>
    </section>
  );
}
