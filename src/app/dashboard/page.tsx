'use client';

import { useState } from 'react';

const tabs = ['Overview', 'Schedule', 'WODs', 'Leaderboard', 'Nutrition', 'Billing'] as const;
type Tab = (typeof tabs)[number];

const upcomingClasses = [
  { day: 'Mon', time: '6:00 PM', name: 'Prime Time WOD', coach: 'Coach Mike', spots: 4 },
  { day: 'Tue', time: '7:00 AM', name: 'Olympic Lifting', coach: 'Coach Sarah', spots: 2 },
  { day: 'Wed', time: '12:00 PM', name: 'Lunch Burner', coach: 'Coach Jake', spots: 8 },
  { day: 'Thu', time: '5:30 PM', name: 'Olympic Lifting', coach: 'Coach Sarah', spots: 5 },
  { day: 'Fri', time: '6:00 PM', name: 'Friday Throwdown', coach: 'Coach Mike', spots: 3 },
];

const recentWods = [
  { date: 'Mar 28', name: 'Fran', result: '4:12', rx: true },
  { date: 'Mar 26', name: 'Murph', result: '38:45', rx: true },
  { date: 'Mar 24', name: 'Grace', result: '2:58', rx: true },
  { date: 'Mar 22', name: 'Diane', result: '6:33', rx: false },
  { date: 'Mar 20', name: 'Helen', result: '9:15', rx: true },
];

const leaderboard = [
  { rank: 1, name: 'Jake M.', score: '2:45', wod: 'Grace' },
  { rank: 2, name: 'Sarah T.', score: '2:52', wod: 'Grace' },
  { rank: 3, name: 'You', score: '2:58', wod: 'Grace', highlight: true },
  { rank: 4, name: 'Emily R.', score: '3:05', wod: 'Grace' },
  { rank: 5, name: 'Mike D.', score: '3:12', wod: 'Grace' },
];

const nutritionPlan = {
  calories: 2400,
  protein: 180,
  carbs: 260,
  fat: 80,
  meals: [
    { time: '7:00 AM', meal: 'Oats, eggs, banana', cals: 550 },
    { time: '10:00 AM', meal: 'Protein shake, almonds', cals: 350 },
    { time: '1:00 PM', meal: 'Chicken, rice, broccoli', cals: 600 },
    { time: '4:00 PM', meal: 'Pre-WOD: PB&J, fruit', cals: 400 },
    { time: '7:00 PM', meal: 'Salmon, sweet potato, greens', cals: 500 },
  ],
};

const attendance = [
  { month: 'Jan', days: 18 },
  { month: 'Feb', days: 20 },
  { month: 'Mar', days: 22 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-56 shrink-0">
          <div className="bg-card border border-border rounded-lg p-5 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-gold/50 flex items-center justify-center text-2xl font-black mb-3">AB</div>
            <h2 className="font-bold text-lg">Alex Brooks</h2>
            <p className="text-sm text-muted">Member since Jan 2024</p>
            <span className="inline-block mt-2 text-xs font-medium px-2 py-1 rounded bg-accent/10 text-accent">Premium</span>
          </div>
          <nav className="bg-card border border-border rounded-lg overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-3 text-sm font-medium border-b border-border last:border-b-0 transition-colors ${
                  activeTab === tab ? 'bg-accent/10 text-accent' : 'text-muted hover:text-foreground hover:bg-card-hover'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-3xl font-black mb-6">
            {activeTab === 'Overview' ? (
              <>WELCOME BACK, <span className="text-accent">ALEX</span></>
            ) : (
              <span className="text-accent">{activeTab.toUpperCase()}</span>
            )}
          </h1>

          {activeTab === 'Overview' && (
            <div className="space-y-6">
              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'This Month', value: '22 classes', color: 'text-accent' },
                  { label: 'Current Streak', value: '14 days', color: 'text-gold' },
                  { label: 'Total WODs', value: '312', color: 'text-accent' },
                  { label: 'PRs This Month', value: '5', color: 'text-gold' },
                ].map((s) => (
                  <div key={s.label} className="bg-card border border-border rounded-lg p-4">
                    <div className={`text-2xl font-black ${s.color}`}>{s.value}</div>
                    <div className="text-xs text-muted mt-1">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Upcoming classes */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Upcoming Classes</h3>
                <div className="space-y-3">
                  {upcomingClasses.slice(0, 3).map((c) => (
                    <div key={c.day + c.time} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">{c.day}</span>
                        <div>
                          <div className="font-medium text-sm">{c.name}</div>
                          <div className="text-xs text-muted">{c.time} · {c.coach}</div>
                        </div>
                      </div>
                      <span className="text-xs text-muted">{c.spots} spots</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attendance */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Attendance History</h3>
                <div className="flex items-end gap-4 h-32">
                  {attendance.map((a) => (
                    <div key={a.month} className="flex-1 flex flex-col items-center">
                      <div className="w-full bg-accent/20 rounded-t relative" style={{ height: `${(a.days / 25) * 100}%` }}>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-accent">{a.days}</div>
                      </div>
                      <div className="text-xs text-muted mt-2">{a.month}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Schedule' && (
            <div className="space-y-3">
              {upcomingClasses.map((c) => (
                <div key={c.day + c.time} className="bg-card border border-border rounded-lg p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded bg-accent/10 text-accent font-bold flex items-center justify-center">{c.day}</div>
                    <div>
                      <div className="font-bold">{c.name}</div>
                      <div className="text-sm text-muted">{c.time} · {c.coach} · {c.spots} spots left</div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-bold rounded transition-colors">
                    Book
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'WODs' && (
            <div className="space-y-3">
              {recentWods.map((w) => (
                <div key={w.date + w.name} className="bg-card border border-border rounded-lg p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted w-16">{w.date}</span>
                    <div>
                      <div className="font-bold">{w.name}</div>
                      <div className="text-sm text-muted">{w.rx ? 'Rx' : 'Scaled'}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-accent">{w.result}</div>
                    {w.rx && <span className="text-xs text-gold font-medium">Rx</span>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Leaderboard' && (
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="px-5 py-3 border-b border-border bg-card-hover">
                <span className="font-bold text-sm">This Week: Grace (30 Clean & Jerks @ 135/95 lb)</span>
              </div>
              {leaderboard.map((l) => (
                <div
                  key={l.rank}
                  className={`flex items-center justify-between px-5 py-4 border-b border-border last:border-b-0 ${
                    l.highlight ? 'bg-accent/5' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      l.rank <= 3 ? 'bg-gold/20 text-gold' : 'bg-card-hover text-muted'
                    }`}>
                      {l.rank}
                    </span>
                    <span className={`font-medium ${l.highlight ? 'text-accent' : ''}`}>{l.name}</span>
                  </div>
                  <span className="font-mono font-bold">{l.score}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Nutrition' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Calories', value: nutritionPlan.calories, unit: 'kcal' },
                  { label: 'Protein', value: nutritionPlan.protein, unit: 'g' },
                  { label: 'Carbs', value: nutritionPlan.carbs, unit: 'g' },
                  { label: 'Fat', value: nutritionPlan.fat, unit: 'g' },
                ].map((m) => (
                  <div key={m.label} className="bg-card border border-border rounded-lg p-4 text-center">
                    <div className="text-2xl font-black text-accent">{m.value}<span className="text-sm text-muted ml-1">{m.unit}</span></div>
                    <div className="text-xs text-muted mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Daily Meal Plan</h3>
                <div className="space-y-3">
                  {nutritionPlan.meals.map((m) => (
                    <div key={m.time} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                      <div className="flex items-center gap-3">
                        <span className="text-accent font-mono text-sm w-20">{m.time}</span>
                        <span className="text-sm">{m.meal}</span>
                      </div>
                      <span className="text-sm text-muted">{m.cals} cal</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Billing' && (
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Current Plan</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-accent/10 text-accent">Active</span>
                </div>
                <div className="text-3xl font-black text-accent">$179<span className="text-sm text-muted font-normal">/month</span></div>
                <p className="text-sm text-muted mt-1">Premium Unlimited — All classes + nutrition coaching</p>
                <p className="text-sm text-muted mt-3">Next billing: April 1, 2026</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-4">Payment History</h3>
                <div className="space-y-3 text-sm">
                  {['Mar 1, 2026', 'Feb 1, 2026', 'Jan 1, 2026'].map((d) => (
                    <div key={d} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
                      <span className="text-muted">{d}</span>
                      <div className="flex items-center gap-3">
                        <span>$179.00</span>
                        <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-400">Paid</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
