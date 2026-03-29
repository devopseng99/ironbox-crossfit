import Link from 'next/link';

const tiers = [
  {
    name: 'Basic',
    price: 129,
    period: '/month',
    desc: 'Perfect for getting started with CrossFit fundamentals.',
    features: [
      '3 classes per week',
      'Foundations On-Ramp included',
      'Open gym access (limited hours)',
      'Community events',
      'IronBox app access',
    ],
    notIncluded: ['Nutrition coaching', 'Competitors program', 'Recovery room', 'Guest passes'],
    accent: false,
  },
  {
    name: 'Premium',
    price: 179,
    period: '/month',
    desc: 'Our most popular plan — unlimited access for serious athletes.',
    features: [
      'Unlimited classes',
      'All programs included',
      'Full open gym access',
      'Nutrition coaching',
      'Recovery room access',
      'IronBox app + WOD tracking',
      '2 guest passes/month',
    ],
    notIncluded: ['Competitors program'],
    accent: true,
  },
  {
    name: 'VIP',
    price: 249,
    period: '/month',
    desc: 'The complete IronBox experience with premium perks.',
    features: [
      'Everything in Premium',
      'Competitors program',
      '2 personal training sessions/month',
      'Priority class booking',
      'Exclusive VIP events',
      'IronBox merch pack (quarterly)',
      'Unlimited guest passes',
      'Infrared sauna access',
    ],
    notIncluded: [],
    accent: false,
  },
];

const specialRates = [
  { name: 'Family Plan', desc: '15% off for each additional family member. All family members must be on the same tier.', price: 'From $110/member' },
  { name: 'Corporate', desc: 'Group rates for companies with 5+ employees. Includes wellness reporting and team WODs.', price: 'Custom pricing' },
  { name: 'Student / Military', desc: '20% discount with valid ID. Available on Basic and Premium tiers.', price: 'From $103/month' },
  { name: 'Drop-In', desc: 'Visiting from another box? Drop in for a single class. No commitment needed.', price: '$25/class' },
];

export default function Membership() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-black">
            <span className="text-accent">MEMBERSHIP</span> PLANS
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            No long-term contracts. Cancel anytime. Your first week is always free — no strings attached.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative bg-card border rounded-lg p-7 flex flex-col ${
                t.accent ? 'border-accent ring-1 ring-accent' : 'border-border'
              }`}
            >
              {t.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-black">{t.name}</h2>
              <div className="mt-2">
                <span className="text-4xl font-black text-accent">${t.price}</span>
                <span className="text-muted">{t.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted">{t.desc}</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
                {t.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted/50">
                    <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/register"
                className={`mt-6 block text-center py-3 font-bold rounded transition-colors ${
                  t.accent
                    ? 'bg-accent hover:bg-accent-hover text-white'
                    : 'bg-card-hover hover:bg-border text-foreground border border-border'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Trial CTA */}
        <div className="bg-gradient-to-r from-accent/10 via-card to-gold/10 border border-border rounded-xl p-8 sm:p-12 text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-black">TRY IRONBOX <span className="text-accent">FREE</span> FOR 7 DAYS</h2>
          <p className="mt-3 text-muted max-w-xl mx-auto">No credit card required. Just show up, work out, and see if IronBox is home.</p>
          <Link href="/register" className="inline-block mt-6 px-8 py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded text-lg transition-colors">
            Claim Your Free Week
          </Link>
        </div>

        {/* Special rates */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black mb-8">SPECIAL <span className="text-gold">RATES</span></h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {specialRates.map((r) => (
              <div key={r.name} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg">{r.name}</h3>
                  <span className="text-sm font-bold text-accent">{r.price}</span>
                </div>
                <p className="text-sm text-muted">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
