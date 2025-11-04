import React from 'react';
import OrnamentDivider from './OrnamentDivider';

export default function InvitationCard() {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-6 py-12">
      <div className="w-full rounded-[32px] p-1 shadow-2xl" style={{ backgroundColor: '#B85C50' }}>
        <div className="rounded-[28px] bg-[#FFF9F0] p-8 sm:p-12">
          <header className="text-center">
            <p className="text-sm tracking-widest" style={{ color: '#8B6F5C' }}>
              Salam damai sejahtera
            </p>
            <h1
              className="mt-3 text-3xl font-semibold sm:text-4xl md:text-5xl"
              style={{ color: '#B85C50', fontFamily: 'Playfair Display, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              Undangan Ibadah Natal Gereja Kita
            </h1>
            <OrnamentDivider />
            <p
              className="mx-auto max-w-2xl text-base leading-relaxed sm:text-lg"
              style={{ color: '#8B6F5C', fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              Dengan sukacita kami mengundang Bapak/Ibu/Saudara/i untuk
              beribadah dan merayakan kelahiran Sang Juru Selamat dalam
              kebersamaan yang hangat dan penuh kasih.
            </p>
          </header>

          <div className="mt-8 grid gap-6 text-center sm:grid-cols-3">
            <InfoBlock title="Tanggal" value="Rabu, 25 Desember 2025" />
            <InfoBlock title="Waktu" value="Pukul 18.00 WIB" />
            <InfoBlock title="Lokasi" value="Gereja Kita, Jl. Damai No. 25, Jakarta" />
          </div>

          <div className="mt-10 flex items-center justify-center">
            <MinimalTree />
          </div>

          <p
            className="mt-10 text-center text-sm"
            style={{ color: '#8B6F5C', fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            Harap hadir 15 menit sebelum ibadah dimulai. Dress code: festive & elegan.
          </p>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ title, value }) {
  return (
    <div className="rounded-2xl border p-4" style={{ borderColor: 'rgba(184,92,80,0.25)' }}>
      <div
        className="text-xs uppercase tracking-widest"
        style={{ color: '#8B6F5C' }}
      >
        {title}
      </div>
      <div
        className="mt-1 text-base font-semibold sm:text-lg"
        style={{ color: '#B85C50', fontFamily: 'Playfair Display, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
      >
        {value}
      </div>
    </div>
  );
}

function MinimalTree() {
  return (
    <svg
      width="80"
      height="96"
      viewBox="0 0 80 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="40" cy="10" r="3" fill="#D4AF37" />
      <path d="M40 14 L20 36 H60 Z" fill="#2E7D32" opacity="0.9" />
      <path d="M40 28 L16 52 H64 Z" fill="#2E7D32" opacity="0.85" />
      <path d="M40 44 L12 72 H68 Z" fill="#2E7D32" opacity="0.8" />
      <rect x="35" y="72" width="10" height="14" fill="#8B6F5C" rx="2" />
    </svg>
  );
}
