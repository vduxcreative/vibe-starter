import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import { profile, projects, skills } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-24 md:py-32">
          <p className="text-violet-400 text-sm tracking-widest uppercase">
            {profile.role}
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I’m {profile.name}.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
            {profile.bio}
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-violet-500 text-white px-5 py-2.5 text-sm font-medium hover:bg-violet-400 transition"
            >
              View Work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
            >
              Get in Touch
            </a>
          </div>
        </section>

        <section id="about" className="py-20 border-t border-white/5">
          <h2 className="text-sm tracking-widest uppercase text-gray-500">About</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-10">
            <p className="md:col-span-2 text-gray-300 leading-relaxed">
              I&apos;m a developer who enjoys turning hard problems into simple,
              beautiful interfaces. I care about performance, accessibility, and
              thoughtful details. Outside of code I read, run, and tinker with
              hardware.
            </p>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500">
                Skills
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="text-xs border border-white/10 rounded-full px-2 py-1 text-gray-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 border-t border-white/5">
          <h2 className="text-sm tracking-widest uppercase text-gray-500">
            Selected Work
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </section>

        <section id="contact" className="py-24 border-t border-white/5">
          <h2 className="text-sm tracking-widest uppercase text-gray-500">
            Contact
          </h2>
          <h3 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
            Let’s build something.
          </h3>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block text-violet-300 underline underline-offset-4"
          >
            {profile.email}
          </a>
          <ul className="mt-8 flex gap-6 text-sm text-gray-400">
            {profile.socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="py-10 border-t border-white/5 text-xs text-gray-500">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </footer>
      </main>
    </>
  );
}
