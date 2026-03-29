const spaces = [
  {
    name: 'Main Training Floor',
    desc: 'Our 8,000 sq ft open floor with pull-up rigs, squat racks, and turf runway. Climate controlled with industrial fans and rubber flooring throughout.',
    hours: 'Mon–Fri 5AM–9PM | Sat 7AM–5PM | Sun 8AM–2PM',
    amenities: ['20 squat racks', 'Pull-up rig (30 stations)', 'Turf sprint lane', 'Concept2 rowers & SkiErgs'],
  },
  {
    name: 'Olympic Lifting Platform',
    desc: 'Dedicated lifting area with 12 competition-grade platforms, Eleiko barbells, and calibrated plates. Mirrors and high-speed cameras for technique review.',
    hours: 'Open during all class hours + open gym',
    amenities: ['12 platforms', 'Eleiko competition bars', 'Calibrated plates', 'Jerk blocks'],
  },
  {
    name: 'Endurance Zone',
    desc: 'Cardio-focused area featuring Assault Bikes, Concept2 rowers, SkiErgs, and a 200m indoor running track. Perfect for engine-building work.',
    hours: 'Open during all facility hours',
    amenities: ['15 Assault Bikes', '10 rowers', '6 SkiErgs', '200m indoor track'],
  },
  {
    name: 'Recovery Room',
    desc: 'Post-workout recovery with foam rollers, lacrosse balls, Normatec compression boots, and a dedicated stretching area. Infrared sauna available by appointment.',
    hours: 'Mon–Sat 6AM–8PM | Sun 8AM–2PM',
    amenities: ['Normatec boots', 'Infrared sauna', 'Foam rollers', 'Cold plunge'],
  },
  {
    name: 'Pro Shop & Lounge',
    desc: 'Grab post-WOD protein shakes, browse IronBox merchandise, or hang out in our athlete lounge with a whiteboard wall of PRs and community photos.',
    hours: 'Open during all facility hours',
    amenities: ['Protein bar', 'IronBox merch', 'Athlete lounge', 'PR board'],
  },
];

const equipment = [
  'Rogue Fitness squat racks (20)',
  'Eleiko Olympic barbells & plates',
  'Concept2 Model D rowers (10)',
  'Concept2 SkiErgs (6)',
  'Assault AirBikes (15)',
  'GHD machines (8)',
  'Plyo boxes (20/24/30")',
  'Kettlebells (8–106 lb)',
  'Dumbbells (5–150 lb)',
  'Medicine balls (4–30 lb)',
  'Battle ropes & climbing ropes',
  'Gymnastic rings (15 pairs)',
  'Resistance bands & jump ropes',
  'Yoke, sled, and sandbags',
];

export default function Facilities() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl sm:text-5xl font-black">
            THE <span className="text-accent">BOX</span>
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            12,000+ square feet of purpose-built training space. No mirrors on the floor,
            no distractions — just iron, chalk, and everything you need to get better.
          </p>
        </div>

        {/* Virtual tour placeholder */}
        <div className="mb-16 rounded-xl overflow-hidden border border-border">
          <div className="aspect-video bg-gradient-to-br from-[#1a0a0a] via-card to-[#0a0a12] flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full border-2 border-accent/50 flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-accent border-b-8 border-b-transparent ml-1" />
              </div>
              <p className="text-muted text-lg font-medium">Virtual Tour Coming Soon</p>
              <p className="text-muted/60 text-sm mt-1">360° walkthrough of IronBox</p>
            </div>
          </div>
        </div>

        {/* Spaces */}
        <div className="space-y-6 mb-20">
          {spaces.map((s) => (
            <div key={s.name} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 aspect-video md:aspect-auto bg-gradient-to-br from-accent/10 via-card to-gold/5" />
                <div className="p-6 md:w-2/3">
                  <h2 className="text-xl font-bold mb-2">{s.name}</h2>
                  <p className="text-sm text-muted leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-sm mb-3"><span className="text-gold font-bold">Hours:</span> <span className="text-muted">{s.hours}</span></p>
                  <div className="flex flex-wrap gap-2">
                    {s.amenities.map((a) => (
                      <span key={a} className="text-xs px-2 py-1 rounded bg-accent/10 text-accent">{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment list */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black mb-8">EQUIPMENT <span className="text-gold">LIST</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {equipment.map((e) => (
              <div key={e} className="flex items-center gap-3 bg-card border border-border rounded-lg px-4 py-3 text-sm">
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                {e}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
