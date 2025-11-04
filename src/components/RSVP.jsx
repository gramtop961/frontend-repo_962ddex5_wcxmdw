import React, { useMemo, useState } from 'react';

export default function RSVP() {
  const [form, setForm] = useState({ name: '', email: '', guests: '1', attending: 'Yes', message: '' });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`RSVP: Christmas Celebration - ${form.name || 'Guest'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nAttending: ${form.attending}\nGuests: ${form.guests}\nMessage: ${form.message}`
    );
    return `mailto:host@northpole.party?subject=${subject}&body=${body}`;
  }, [form]);

  function onChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <section id="rsvp" className="relative mx-auto max-w-2xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">RSVP</h2>
        <p className="mt-2 text-white/70">Let us know you’re coming. We’re saving you a seat by the tree!</p>
      </div>

      <form onSubmit={onSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm text-white/80" htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-red-400"
              placeholder="Jane Snow"
              type="text"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm text-white/80" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-red-400"
              placeholder="jane@wintermail.com"
              type="email"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm text-white/80" htmlFor="attending">Attending</label>
            <select
              id="attending"
              name="attending"
              value={form.attending}
              onChange={onChange}
              className="w-full appearance-none rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white outline-none focus:border-red-400"
            >
              <option className="bg-slate-900" value="Yes">Yes, I’ll be there</option>
              <option className="bg-slate-900" value="No">Sorry, can’t make it</option>
            </select>
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-sm text-white/80" htmlFor="guests">Number of Guests</label>
            <input
              id="guests"
              name="guests"
              value={form.guests}
              onChange={onChange}
              className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white outline-none focus:border-red-400"
              type="number"
              min="0"
              max="10"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-sm text-white/80" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={onChange}
              rows={4}
              className="w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none focus:border-red-400"
              placeholder="Any dietary needs or cheerful notes for the host?"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <a href={mailtoHref} className="text-sm text-white/70 underline underline-offset-4">Send via email client</a>
          <button
            type="submit"
            className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Confirm RSVP
          </button>
        </div>
      </form>
    </section>
  );
}
