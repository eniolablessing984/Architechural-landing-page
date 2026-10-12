export function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center md:text-left">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="luxury-serif text-4xl leading-none text-[#171717] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm leading-7 text-[#4a4946] sm:text-base">{description}</p>
      ) : null}
    </div>
  )
}
