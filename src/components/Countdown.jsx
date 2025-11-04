import React, { useEffect, useState } from 'react';

function getNextChristmas() {
  const now = new Date();
  const year = now.getFullYear();
  const target = new Date(year, 11, 25, 18, 0, 0); // Dec 25, 6:00 PM local
  if (now > target) return new Date(year + 1, 11, 25, 18, 0, 0);
  return target;
}

function formatTime(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [target] = useState(getNextChristmas());
  const [timeLeft, setTimeLeft] = useState(formatTime(target - new Date()));

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(formatTime(target - new Date()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/20 via-emerald-500/10 to-sky-500/20 p-8 text-center text-white shadow-2xl backdrop-blur">
        <h2 className="text-2xl font-semibold sm:text-3xl">Countdown to Christmas Party</h2>
        <p className="mt-2 text-white/80">We can't wait to celebrate with you!</p>
        <div className="mt-8 grid grid-cols-4 gap-4">
          <TimeBlock label="Days" value={days} />
          <TimeBlock label="Hours" value={hours} />
          <TimeBlock label="Minutes" value={minutes} />
          <TimeBlock label="Seconds" value={seconds} />
        </div>
      </div>
    </section>
  );
}

function TimeBlock({ label, value }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
      <div className="text-3xl font-bold">{String(value).padStart(2, '0')}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-white/80">{label}</div>
    </div>
  );
}
