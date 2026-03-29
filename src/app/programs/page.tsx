import Link from 'next/link';

const programs = [
  {
    title: 'CrossFit WOD',
    desc: 'Our signature class. Constantly varied functional movements performed at high intensity. Each day brings a new workout designed to improve your overall fitness across all domains.',
    schedule: 'Mon–Fri 5:30AM, 7AM, 12PM, 4:30PM, 6PM | Sat 8AM, 9:30AM',
    level: 'All Levels',
    capacity: '20 athletes',
    duration: '60 min',
  },
  {
    title: 'Olympic Weightlifting',
    desc: 'Dedicated barbell work focusing on the snatch, clean & jerk, and accessory lifts. Build explosive power, speed, and technique under expert coaching.',
    schedule: 'Tue & Thu 7AM, 5:30PM | Sat 10AM',
    level: 'Intermediate+',
    capacity: '12 athletes',
    duration: '75 min',
  },
  {
    title: 'Endurance & Conditioning',
    desc: 'Longer aerobic sessions combining rowing, running, biking, and swimming. Build the engine that powers everything else.',
    schedule: 'Mon & Wed 6AM | Fri 5:30PM | Sun 9AM',
    level: 'All Levels',
    capacity: '15 athletes',
    duration: '45 min',
  },
  {
    title: 'Foundations (On-Ramp)',
    desc: 'Our 3-week introductory course for new members. Learn the fundamental movements, gym etiquette, and build a baseline of fitness before joining group classes.',
    schedule: 'Mon, Wed, Fri 4:30PM | Rolling start dates',
    level: 'Beginner',
    capacity: '8 athletes',
    duration: '60 min',
  },
  {
    title: 'Competitors Program',
    desc: 'For athletes targeting the CrossFit Open, Quarterfinals, and beyond. Extra volume, skill work, and individualized programming.',
    schedule: 'Mon–Fri 3PM | Sat 7AM',
    level: 'Advanced',
    capacity: '10 athletes',
    duration: '90 min',
  },
  {
    title: 'Nutrition Coaching',
    desc: 'One-on-one macro coaching with certified nutritionists. Weekly check-ins, meal planning, and supplement guidance tailored to your goals.',
    schedule: 'Flexible — weekly video calls',
    level: 'All Levels',
    capacity: 'Unlimited',
    duration: '30 min/week',
  },
  {
    title: 'Personal Training',
    desc: 'Private sessions with our certified coaches. Perfect for injury rehab, specific skill development, or accelerated progress.',
    schedule: 'By appointment',
    level: 'All Levels',
    capacity: '1-on-1',
    duration: '60 min',
  },
  {
    title: 'Kids & Teens CrossFit',
    desc: 'Age-appropriate functional fitness for youth ages 7–17. Build coordination, strength, and confidence in a fun, supervised environment.',
    schedule: 'Tue & Thu 3:30PM | Sat 11AM',
    level: 'Youth (7–17)',
    capacity: '15 athletes',
    duration: '45 min',
  },
];

export default function Programs() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl sm:text-5xl font-black">
            OUR <span className="text-accent">PROGRAMS</span>
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            From foundations to competition — IronBox offers programming for every level.
            All classes are coach-led, scalable, and designed to get results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-bold">{p.title}</h2>
                <span className="text-xs font-medium px-2 py-1 rounded bg-accent/10 text-accent shrink-0 ml-3">{p.level}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">{p.desc}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted">
                  <span className="text-gold font-bold">Schedule:</span> {p.schedule}
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-muted"><span className="text-gold font-bold">Cap:</span> {p.capacity}</span>
                  <span className="text-muted"><span className="text-gold font-bold">Duration:</span> {p.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/register" className="inline-block px-8 py-3 bg-accent hover:bg-accent-hover text-white font-bold rounded text-lg transition-colors">
            Register for a Class
          </Link>
        </div>
      </section>
    </>
  );
}
