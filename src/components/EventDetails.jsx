import React from 'react';

export default function EventDetails() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Event Details</h2>
        <p className="mt-3 text-white/70">Everything you need for a magical night.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DetailCard title="Location">
          123 Snowflake Ave
          <br /> Wintertown, WT 00025
        </DetailCard>
        <DetailCard title="Schedule">
          6:00 PM - Welcome Drinks
          <br /> 7:00 PM - Dinner & Carols
          <br /> 9:00 PM - Secret Santa
        </DetailCard>
        <DetailCard title="Dress Code">
          Festive & Cozy – think reds, greens, sparkles, and warm knits!
        </DetailCard>
        <DetailCard title="Parking">
          Street parking available. Rideshare is encouraged if possible.
        </DetailCard>
        <DetailCard title="Gifts">
          Secret Santa optional. If you participate, cap at $20.
        </DetailCard>
        <DetailCard title="Contact">
          Questions? Email host@northpole.party
        </DetailCard>
      </div>
    </section>
  );
}

function DetailCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-lg backdrop-blur-lg">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-white/80">{children}</p>
    </div>
  );
}
