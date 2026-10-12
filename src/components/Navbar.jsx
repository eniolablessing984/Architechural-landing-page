import { useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Studio', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Journal', href: '#testimonials' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f5f1ea]/90 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between py-5" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3" aria-label="Epitome Form home page">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#171717] text-[10px] font-medium tracking-[0.28em] text-[#171717]">
            BG
          </div>
          <div>
            <div className="text-[10px] tracking-[0.34em] text-[#5d5a57] uppercase">Epitome</div>
            <div className="luxury-serif text-2xl leading-none text-[#171717]">Real_Estate</div>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm uppercase tracking-[0.24em] text-[#4a4946] transition hover:text-[#171717]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#171717] bg-[#171717] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-[#f5f1ea] transition hover:bg-[#2d2b2a]"
          >
            Contact
            <ArrowRight size={15} />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#171717] text-[#171717] md:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-black/5 bg-[#f5f1ea] md:hidden">
          <div className="section-shell flex flex-col gap-4 py-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-[0.24em] text-[#171717]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-[#171717]"
              onClick={() => setOpen(false)}
            >
              Book a consult
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
