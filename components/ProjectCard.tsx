type Props = {
  title: string;
  summary: string;
  tags: string[];
  href: string;
};

export default function ProjectCard({ title, summary, tags, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-white/10 p-6 hover:border-violet-400/60 hover:bg-white/5 transition"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold group-hover:text-violet-300 transition">
          {title}
        </h3>
        <span className="text-gray-500 group-hover:text-violet-300 transition">↗</span>
      </div>
      <p className="mt-2 text-sm text-gray-400 leading-relaxed">{summary}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <li
            key={t}
            className="text-xs text-gray-300 border border-white/10 rounded-full px-2 py-0.5"
          >
            {t}
          </li>
        ))}
      </ul>
    </a>
  );
}
