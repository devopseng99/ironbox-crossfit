import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#111113] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-accent flex items-center justify-center font-black text-white text-xs">IB</div>
              <span className="text-lg font-black tracking-tight">
                IRON<span className="text-accent">BOX</span>
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Forged in iron. Built by community. IronBox CrossFit — where raw power meets relentless discipline.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gold">Programs</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/programs" className="hover:text-foreground transition-colors">CrossFit Classes</Link></li>
              <li><Link href="/programs" className="hover:text-foreground transition-colors">Olympic Lifting</Link></li>
              <li><Link href="/programs" className="hover:text-foreground transition-colors">Endurance WODs</Link></li>
              <li><Link href="/programs" className="hover:text-foreground transition-colors">Nutrition Coaching</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gold">Company</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/membership" className="hover:text-foreground transition-colors">Membership</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>123 Iron Street, Austin, TX 78701</li>
              <li>(512) 555-0199</li>
              <li>info@ironboxcrossfit.com</li>
              <li className="pt-1">
                <Link href="/contact" className="text-accent hover:text-accent-hover transition-colors font-medium">
                  Get in Touch →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>© 2026 IronBox CrossFit. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Waiver</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
