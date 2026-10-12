import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Compass,
  Globe,
  House,
  Mail,
  MapPin,
  PhoneCall,
  Quote,
  Ruler,
  Sparkles,
} from 'lucide-react'
import { Navbar } from './components/Navbar'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeader } from './components/SectionHeader'
import { ServiceCard } from './components/ServiceCard'
import { projects } from './data/projects'

const services = [
  {
    title: 'Architecture',
    description:
      'Context-led design for homes, hospitality, and cultural spaces shaped with clarity, comfort, and longevity in mind.',
    icon: Building2,
  },
  {
    title: 'Interiors',
    description:
      'Material palettes, custom detailing, and spatial composition that bring warmth, rhythm, and refinement to everyday life.',
    icon: House,
  },
  {
    title: 'Planning',
    description:
      'Strategic feasibility, zoning insight, and site planning that align ambition with practicality and performance.',
    icon: Compass,
  },
  {
    title: 'Consultation',
    description:
      'Focused advisory support for clients navigating design direction, procurement, and project decision-making.',
    icon: Ruler,
  },
]

const achievements = [
  { value: '42', label: 'Homes completed' },
  { value: '16', label: 'Years of practice' },
  { value: '9', label: 'International awards' },
]

const socialLinks = [
  { href: 'https://www.instagram.com', label: 'Instagram', icon: Globe },
  { href: 'https://www.linkedin.com', label: 'LinkedIn', icon: ArrowUpRight },
]

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1300)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-section')

    if (!revealElements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [loading])

  if (loading) {
    return (
      <div className="page-loader" aria-live="polite" aria-label="Loading studio experience">
        <div className="page-loader__inner">
          <div className="page-loader__brand">
            <span>Epitome</span>
            <span>Real_Estate</span>
          </div>
          <div className="page-loader__track" aria-hidden="true">
            <span className="page-loader__bar" />
          </div>
          <p className="page-loader__text">Preparing spaces</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#171717] page-shell">
      <Navbar />

      <main>
        <section id="top" className="section-shell reveal-section pb-16 pt-12 sm:pb-20 lg:pb-28 lg:pt-16" style={{ '--reveal-delay': '0.12s' }}>
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_1.18fr]">
            <div>
              <p className="eyebrow mb-5">Architecture studio</p>
              <h1 className="luxury-serif max-w-xl text-5xl leading-[0.95] text-[#171717] sm:text-6xl lg:text-[5.25rem]">
                Thoughtful spaces, quietly extraordinary.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#4a4946] sm:text-lg">
                We design residences, hospitality, and cultural environments that balance structure,
                atmosphere, and lasting livability.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-[#f5f1ea] transition hover:bg-[#2d2b2a]"
                >
                  View projects
                  <ArrowRight size={15} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#171717] px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-[#171717] transition hover:bg-white"
                >
                  Book a consult
                </a>
              </div>

              <div className="mt-10 grid max-w-md grid-cols-3 gap-5 border-t border-[#d9d2c6] pt-6">
                {achievements.map((item) => (
                  <div key={item.label}>
                    <div className="luxury-serif text-3xl text-[#171717]">{item.value}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#5d5a57]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] border border-[#d9d2c6] bg-[#eee7df] shadow-[0_24px_60px_rgba(23,23,23,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern architecture home exterior with warm wood and stone materials"
                  className="h-[620px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-4 right-4 rounded-[1.5rem] border border-[#d9d2c6] bg-[#f8f5f1]/90 p-5 shadow-[0_18px_40px_rgba(23,23,23,0.08)] backdrop-blur-sm sm:left-8 sm:right-auto sm:w-[280px]">
                <p className="text-[10px] uppercase tracking-[0.26em] text-[#5d5a57]">Selected project</p>
                <p className="luxury-serif mt-3 text-2xl text-[#171717]">Harbor House</p>
                <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#4a4946]">
                  <MapPin size={12} />
                  Copenhagen
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section-shell reveal-section py-16 sm:py-20" style={{ '--reveal-delay': '0.24s' }}>
          <SectionHeader
            eyebrow="Featured work"
            title="Selected residences and civic spaces."
            description="Each commission begins with a precise reading of context, flow, and materiality — resulting in places that feel composed, calm, and deeply lived in."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="reveal-card"
                style={{ '--reveal-delay': `${0.18 + index * 0.15}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell reveal-section py-16 sm:py-20" style={{ '--reveal-delay': '0.36s' }}>
          <div className="grid gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural studio team reviewing a modern interior material palette"
                className="h-[560px] w-full rounded-[2rem] object-cover"
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-[#d9d2c6] bg-[#f8f5f1]/90 px-4 py-2 backdrop-blur-sm">
                <Sparkles size={16} className="text-[#171717]" />
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#171717]">Since 2008</span>
              </div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Studio philosophy"
                title="Design that feels inevitable."
                description="We believe great architecture should feel both calm and precise — rooted in its site, built around daily rituals, and composed with enduring materials."
              />

              <div className="mt-8 space-y-6 text-base leading-8 text-[#4a4946]">
                <p>
                  Our process blends rigorous planning with tactile sensitivity. We listen closely
                  to the way people move, gather, and rest, then shape each threshold, window, and
                  surface to support that rhythm.
                </p>
                <p>
                  From first concept to final detailing, we bring together architecture, interiors,
                  and landscape in a unified narrative — always with restraint, warmth, and clarity.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-[#d9d2c6] bg-white p-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#5d5a57]">Approach</p>
                  <p className="luxury-serif mt-3 text-2xl text-[#171717]">Site-led</p>
                </div>
                <div className="rounded-[1.5rem] border border-[#d9d2c6] bg-white p-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#5d5a57]">Materiality</p>
                  <p className="luxury-serif mt-3 text-2xl text-[#171717]">Quiet luxury</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-shell reveal-section py-16 sm:py-20" style={{ '--reveal-delay': '0.48s' }}>
          <SectionHeader
            eyebrow="Services"
            title="End-to-end architectural guidance."
            description="From concept through completion, we support each stage with strategic thinking, craft discipline, and a clear design language."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="reveal-card"
                style={{ '--reveal-delay': `${0.18 + index * 0.12}s` }}
              >
                <ServiceCard title={service.title} description={service.description} icon={service.icon} />
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="section-shell reveal-section py-16 sm:py-20" style={{ '--reveal-delay': '0.6s' }}>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-[#d9d2c6] bg-[#f8f5f1] p-8 sm:p-10">
              <Quote className="text-[#171717]" size={28} />
              <blockquote className="luxury-serif mt-6 text-3xl leading-tight text-[#171717] sm:text-4xl">
                “Their team translated a complex brief into a home that feels effortless, warm, and deeply personal.”
              </blockquote>
              <div className="mt-8 border-t border-[#d9d2c6] pt-5">
                <p className="text-base font-medium text-[#171717]">Alicia Martin</p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#5d5a57]">Private client</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#171717] p-8 text-[#f5f1ea] sm:p-10">
              <p className="text-[10px] uppercase tracking-[0.26em] text-[#d9d2c6]">Studio metrics</p>
              <div className="mt-8 space-y-8">
                {[
                  { value: '98%', label: 'Client retention' },
                  { value: '12', label: 'Cities designed in' },
                  { value: '4.9/5', label: 'Average review score' },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="reveal-card"
                    style={{ '--reveal-delay': `${0.2 + index * 0.14}s` }}
                  >
                    <div className="luxury-serif text-4xl">{stat.value}</div>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#d9d2c6]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell reveal-section pb-16 pt-6 sm:pb-20" style={{ '--reveal-delay': '0.72s' }}>
          <div className="rounded-[2rem] bg-[#171717] px-6 py-8 text-[#f5f1ea] sm:px-8 lg:px-10 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-[#d9d2c6]">Start a project</p>
                <h2 className="luxury-serif mt-4 max-w-lg text-4xl leading-none text-[#f5f1ea] sm:text-5xl">
                  Shape a residence that moves beautifully through time.
                </h2>
              </div>

              <div className="flex flex-col gap-4 text-sm text-[#efeae3] sm:flex-row lg:flex-col lg:items-end">
                <a href="mailto:hello@atelierform.studio" className="inline-flex items-center gap-2 hover:text-white">
                  <Mail size={16} />
                  eniolablessing984@gmail.com
                </a>
                <a href="tel:+4522418809" className="inline-flex items-center gap-2 hover:text-white">
                  <PhoneCall size={16} />
                  +235 9135666959
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-[#f5f1ea]">
        <div className="section-shell flex flex-col gap-8 py-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#171717] text-[10px] font-medium tracking-[0.28em] text-[#171717]">
                BG
              </div>
              <div>
                <div className="text-[10px] tracking-[0.34em] text-[#5d5a57] uppercase">Epitome</div>
                <div className="luxury-serif text-2xl leading-none text-[#171717]">Real_Estate</div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#4a4946]">
              Contemporary architecture and interiors informed by context, craft, and long-term living.
            </p>
          </div>

          <div className="flex flex-col gap-5 text-sm text-[#4a4946] md:items-end">
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              18 Vestergade, Copenhagen
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#d9d2c6] bg-white text-[#171717] transition hover:border-[#171717]"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
