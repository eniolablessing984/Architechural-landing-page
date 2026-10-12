export function ServiceCard({ icon: Icon, title, description }) {
  return (
    <article className="group border border-[#d9d2c6] bg-[#f8f5f1] p-6 transition duration-300 hover:border-[#171717] hover:bg-white sm:p-7">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#d9d2c6] bg-white text-[#171717] transition group-hover:border-[#171717] group-hover:bg-[#171717] group-hover:text-[#f5f1ea]">
        <Icon size={18} />
      </div>
      <h3 className="luxury-serif mb-3 text-2xl text-[#171717]">{title}</h3>
      <p className="text-sm leading-7 text-[#4a4946]">{description}</p>
    </article>
  )
}
