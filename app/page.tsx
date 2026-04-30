import Link from "next/link";
import Nav from "@/components/Nav";

const days = [
  {
    href: "/day1",
    label: "Day 1",
    title: "Vibe Coding, 처음 시작하기",
    desc: "개발 환경 세팅부터 GitHub, Vercel 배포까지. 내 손으로 만든 Next.js 포트폴리오를 인터넷에 띄워봅니다.",
    tags: ["환경 세팅", "GitHub", "Vercel"],
  },
  {
    href: "/day2",
    label: "Day 2",
    title: "계획부터 세우는 바이브 코딩",
    desc: "PRD와 PLAN.md를 먼저 만들고 그걸 보고 코딩하기. 이번엔 각자 만들고 싶었던 아이디어로.",
    tags: ["PRD", "PLAN.md", "Vibe"],
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-24 md:py-36">
          <p className="text-violet-400 text-sm tracking-widest uppercase">
            Vibe Coding Study
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight">
            디자이너를 위한 <br />
            바이브 코딩.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
            손으로 만들고, 배포하고, 계획부터 세워보는 단계별 가이드.<br />
            오늘의 Day를 골라 시작하세요.
          </p>
        </section>

        <section className="py-12 grid md:grid-cols-2 gap-4">
          {days.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group block rounded-2xl border border-white/15 bg-white/[0.03] p-8 hover:border-violet-400/60 hover:bg-white/5 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-violet-400 text-xs tracking-widest uppercase">
                  {d.label}
                </p>
                <span className="text-slate-400 group-hover:text-violet-300 transition">
                  →
                </span>
              </div>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight group-hover:text-violet-200 transition">
                {d.title}
              </h2>
              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {d.desc}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {d.tags.map((t) => (
                  <li
                    key={t}
                    className="text-xs text-slate-300 border border-white/15 bg-white/[0.03] rounded-full px-3 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </section>

        <footer className="py-16 border-t border-white/10 text-xs text-slate-400">
          © {new Date().getFullYear()} Vibe Starter. Built with Next.js.
        </footer>
      </main>
    </>
  );
}
