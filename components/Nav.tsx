import Link from "next/link";

const links = [
  { href: "/#prepare", label: "준비하기" },
  { href: "/#start", label: "시작하기" },
  { href: "/#deploy", label: "배포하기" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-black/40 border-b border-white/5">
      <nav className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          ◆ vibe starter
        </Link>
        <ul className="flex gap-6 text-sm text-gray-400">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white transition">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
