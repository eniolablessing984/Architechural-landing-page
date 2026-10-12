import { ArrowUpRight, MapPin } from 'lucide-react'

export function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden bg-[#f8f5f1] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] tracking-[0.24em] text-[#5d5a57] uppercase">{project.category}</span>
          <span className="rounded-full border border-[#d4c8b7] px-2.5 py-1 text-[10px] tracking-[0.2em] text-[#2a2927] uppercase">
            {project.year}
          </span>
        </div>

        <div>
          <h3 className="luxury-serif text-3xl text-[#171717]">{project.title}</h3>
          <div className="mt-3 flex items-center gap-2 text-sm text-[#4a4946]">
            <MapPin size={14} />
            <span>{project.location}</span>
          </div>
        </div>

        <p className="text-sm leading-7 text-[#4a4946]">{project.description}</p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-[#171717] transition hover:text-[#5d5a57]"
        >
          View project
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  )
}
