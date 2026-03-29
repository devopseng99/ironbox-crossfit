'use client';

import { useState } from 'react';

const programs = [
  'CrossFit WOD',
  'Olympic Weightlifting',
  'Endurance & Conditioning',
  'Foundations (On-Ramp)',
  'Competitors Program',
  'Nutrition Coaching',
  'Personal Training',
  'Kids & Teens CrossFit',
];

const sessions = [
  'Spring 2026 (Mar–May)',
  'Summer 2026 (Jun–Aug)',
  'Fall 2026 (Sep–Nov)',
  'Winter 2026 (Dec–Feb)',
];

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    program: '',
    session: '',
    experience: '',
    emergencyName: '',
    emergencyPhone: '',
    waiver: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-black mb-3">YOU&apos;RE <span className="text-accent">IN!</span></h1>
        <p className="text-muted text-lg">
          Welcome to IronBox, {formData.firstName}! We&apos;ll send confirmation details to {formData.email}.
          See you on the floor.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-black">
          <span className="text-accent">REGISTER</span>
        </h1>
        <p className="mt-4 text-lg text-muted">
          Ready to join the IronBox community? Fill out the form below to register for a program or claim your free trial week.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Info */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gold">Participant Information</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">First Name *</label>
              <input
                type="text" name="firstName" required value={formData.firstName} onChange={handleChange}
                className="w-full bg-card border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Last Name *</label>
              <input
                type="text" name="lastName" required value={formData.lastName} onChange={handleChange}
                className="w-full bg-card border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email *</label>
              <input
                type="email" name="email" required value={formData.email} onChange={handleChange}
                className="w-full bg-card border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Phone</label>
              <input
                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                className="w-full bg-card border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Date of Birth *</label>
              <input
                type="date" name="dob" required value={formData.dob} onChange={handleChange}
                className="w-full bg-card border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Program Selection */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gold">Program Selection</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Program *</label>
              <select
                name="program" required value={formData.program} onChange={handleChange}
                className="w-full bg-card border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Select a program</option>
                {programs.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Session *</label>
              <select
                name="session" required value={formData.session} onChange={handleChange}
                className="w-full bg-card border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Select a session</option>
                {sessions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1.5">CrossFit Experience</label>
            <textarea
              name="experience" value={formData.experience} onChange={handleChange} rows={3}
              placeholder="Tell us about your fitness background..."
              className="w-full bg-card border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>
        </div>

        {/* Emergency Contact */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-gold">Emergency Contact</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Contact Name *</label>
              <input
                type="text" name="emergencyName" required value={formData.emergencyName} onChange={handleChange}
                className="w-full bg-card border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Contact Phone *</label>
              <input
                type="tel" name="emergencyPhone" required value={formData.emergencyPhone} onChange={handleChange}
                className="w-full bg-card border border-border rounded px-4 py-2.5 text-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Waiver */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-bold mb-3 text-gold">Liability Waiver</h2>
          <p className="text-sm text-muted leading-relaxed mb-4">
            I understand that CrossFit training involves inherent risks, including but not limited to injury from physical activity.
            I voluntarily assume all risks and agree to release IronBox CrossFit, its coaches, and staff from liability.
            I confirm that I am physically capable of participating and will notify coaches of any medical conditions.
          </p>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox" name="waiver" required checked={formData.waiver} onChange={handleChange}
              className="w-5 h-5 rounded border-border bg-card accent-accent"
            />
            <span className="text-sm font-medium">I have read and accept the liability waiver *</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-bold text-lg rounded transition-colors"
        >
          Complete Registration
        </button>
      </form>
    </section>
  );
}
