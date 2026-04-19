import Image from "next/image";
import Nav from "@/components/Nav";

import github01 from "@/assets/github/01.png";
import github02 from "@/assets/github/02.png";
import github03 from "@/assets/github/03.png";
import github04 from "@/assets/github/04.png";
import github05 from "@/assets/github/05.png";
import github06 from "@/assets/github/06.png";
import vercel01 from "@/assets/vercel/01.png";
import vercel02 from "@/assets/vercel/02.png";
import vercel03 from "@/assets/vercel/03.png";
import vercel04 from "@/assets/vercel/04.png";
import vercel05 from "@/assets/vercel/05.png";

const osDownloads = [
  { env: "Windows (x64)", file: "Windows 설치 프로그램 (.msi)" },
  { env: "Intel Mac (x64)", file: "macOS 설치 프로그램 (.pkg)" },
  { env: "Apple Silicon Mac (ARM64)", file: "macOS 설치 프로그램 (.pkg)" },
];

const desktopApps = [
  { name: "OpenAI Codex", href: "https://openai.com/ko-KR/codex/" },
  { name: "Google Antigravity", href: "https://antigravity.google/download" },
  { name: "Anthropic Claude", href: "https://claude.com/download" },
];

const cliTools = [
  { name: "OpenAI Codex CLI", href: "https://developers.openai.com/codex/cli" },
  { name: "Gemini CLI", href: "https://geminicli.com/" },
  { name: "Claude Code", href: "https://code.claude.com/docs/ko/overview" },
];

const githubSteps = [
  {
    img: github01,
    title: "① GitHub 대시보드에서 New repository",
    desc: "우측 상단 + 버튼 → New repository를 선택합니다.",
  },
  {
    img: github02,
    title: "② 저장소 이름 입력 후 생성",
    desc: "Repository name에 프로젝트 이름을 적고, Public으로 두고 Create repository.",
  },
  {
    img: github03,
    title: "③ Quick setup 명령어 확인",
    desc: "생성 직후 나타나는 화면에서 CLI 명령어 블록을 확인합니다.",
  },
  {
    img: github04,
    title: "④ 터미널에서 명령어 실행",
    desc: "프로젝트 폴더에서 터미널을 열고 아래 명령어를 순서대로 입력하세요.",
  },
  {
    img: github05,
    title: "⑤ Git Credential Manager 인증",
    desc: "처음 push할 때 브라우저가 열립니다. Authorize git-ecosystem으로 GitHub 계정을 연결합니다.",
  },
  {
    img: github06,
    title: "⑥ 업로드 확인",
    desc: "GitHub 저장소 페이지를 새로고침하면 README.md가 올라와 있습니다.",
  },
];

const vercelSteps = [
  {
    img: vercel01,
    title: "① Vercel 대시보드 → Add New → Project",
    desc: "우측 상단의 Add New… 버튼을 눌러 Project를 선택합니다.",
  },
  {
    img: vercel02,
    title: "② Continue with GitHub",
    desc: "Import Git Repository 섹션에서 GitHub 계정을 Vercel에 연결합니다.",
  },
  {
    img: vercel03,
    title: "③ 저장소 Import",
    desc: "방금 만든 저장소를 목록에서 찾아 Import 버튼을 누릅니다.",
  },
  {
    img: vercel04,
    title: "④ Framework 확인 후 Deploy",
    desc: "Next.js는 자동 감지됩니다. 설정을 건드리지 않고 Deploy를 누르면 끝.",
  },
  {
    img: vercel05,
    title: "⑤ 배포 완료",
    desc: "몇 초~몇 분 뒤 your-project.vercel.app 주소가 발급됩니다. 누구에게나 공유 가능.",
  },
];

const gitCommands = `git config --global user.name "YOUR_NAME"
git config --global user.email "YOUR_EMAIL"
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main`;

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-24 md:py-32">
          <p className="text-violet-400 text-sm tracking-widest uppercase">
            Day 1
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight">
            Vibe Coding, <br />
            처음 시작하기.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-relaxed">
            디자이너를 위한 바이브 코딩 입문 가이드.<br/>개발 환경을 세팅하고,
            내 손으로 만든 Next.js 포트폴리오를 GitHub에 올려<br/>Vercel로 배포하는
            과정까지 한 번에 경험합니다.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#prepare"
              className="rounded-lg bg-violet-500 text-white px-5 py-2.5 text-sm font-medium hover:bg-violet-400 transition"
            >
              준비부터 보기
            </a>
            <a
              href="#deploy"
              className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
            >
              배포하기 →
            </a>
          </div>
        </section>

        <section id="prepare" className="py-20 border-t border-white/5">
          <h2 className="text-sm tracking-widest uppercase text-gray-500">
            A. 준비하기
          </h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            개발 환경 설치
          </h3>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-2xl">
            바이브 코딩을 시작하려면 기본 도구 두 가지가 필요합니다.{" "}
            <span className="text-white">Git</span>은 코드 버전 관리,{" "}
            <span className="text-white">Node.js</span>는 웹 프로젝트 실행
            환경입니다.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold">Git</h4>
              <p className="mt-2 text-sm text-gray-400">
                코드 변경 내역을 관리하고 GitHub에 올리기 위한 필수 도구.
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                <li>
                  <a
                    className="text-violet-300 underline underline-offset-4"
                    href="https://git-scm.com/install/windows"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Windows 설치 →
                  </a>
                </li>
                <li>
                  <a
                    className="text-violet-300 underline underline-offset-4"
                    href="https://git-scm.com/install/mac"
                    target="_blank"
                    rel="noreferrer"
                  >
                    macOS 설치 →
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold">Node.js</h4>
              <p className="mt-2 text-sm text-gray-400">
                자신의 OS/CPU에 맞는 버전을 선택하세요.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {osDownloads.map((o) => (
                  <li
                    key={o.env}
                    className="flex justify-between gap-4 text-gray-300"
                  >
                    <span>{o.env}</span>
                    <span className="text-gray-500 text-right">{o.file}</span>
                  </li>
                ))}
              </ul>
              <a
                className="mt-4 inline-block text-violet-300 underline underline-offset-4 text-sm"
                href="https://nodejs.org/ko/download"
                target="_blank"
                rel="noreferrer"
              >
                Node.js 다운로드 →
              </a>
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            * Mac은 Apple 로고 → “이 Mac에 관하여”에서 칩 종류를 확인할 수
            있습니다. “Apple M1/M2/…”이면 ARM64.
          </p>
        </section>

        <section className="py-20 border-t border-white/5">
          <h2 className="text-sm tracking-widest uppercase text-gray-500">
            코딩 AI 설치
          </h2>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-2xl">
            자신이 구독한 서비스 중 <span className="text-white">하나</span>를
            골라 설치하면 됩니다.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold">데스크탑 앱</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {desktopApps.map((a) => (
                  <li key={a.name}>
                    <a
                      href={a.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-violet-300 underline underline-offset-4"
                    >
                      {a.name} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold">CLI (명령줄 도구)</h4>
              <p className="mt-2 text-sm text-gray-400">
                주력이 아니더라도 한 번쯤 써보길 권장. AI 에이전트가 실제로
                어떻게 파일을 읽고 명령을 실행하는지 감을 잡는 데 큰 도움이
                됩니다.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {cliTools.map((c) => (
                  <li key={c.name}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-violet-300 underline underline-offset-4"
                    >
                      {c.name} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 p-6">
            <h4 className="font-semibold">VSCode</h4>
            <p className="mt-2 text-sm text-gray-400">
              코드 에디터. 거의 모든 AI 코딩 확장과 호환됩니다.
            </p>
            <a
              className="mt-3 inline-block text-violet-300 underline underline-offset-4 text-sm"
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
            >
              VSCode 다운로드 →
            </a>
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <h2 className="text-sm tracking-widest uppercase text-gray-500">
            GitHub & Vercel 가입
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-white/10 p-6 hover:border-violet-400/60 hover:bg-white/5 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold group-hover:text-violet-300 transition">
                  GitHub
                </h3>
                <span className="text-gray-500 group-hover:text-violet-300 transition">
                  ↗
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                소스 코드 저장소이자 협업 플랫폼.
              </p>
            </a>
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border border-white/10 p-6 hover:border-violet-400/60 hover:bg-white/5 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold group-hover:text-violet-300 transition">
                  Vercel
                </h3>
                <span className="text-gray-500 group-hover:text-violet-300 transition">
                  ↗
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                만든 웹 서비스를 세상에 공개하는 배포 플랫폼. 과제가
                웹서비스가 아니면 건너뛰어도 됩니다.
              </p>
            </a>
          </div>
        </section>

        <section id="start" className="py-20 border-t border-white/5">
          <h2 className="text-sm tracking-widest uppercase text-gray-500">
            B. 시작하기
          </h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            README.md 만들고 GitHub에 올리기
          </h3>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-2xl">
            먼저 프로젝트 폴더에 <code className="text-violet-300">README.md</code>
            를 만듭니다. 내용은{" "}
            <span className="text-white">
              AI에게 “내 프로젝트 소개글 써줘”
            </span>{" "}
            라고 부탁하면 됩니다.
          </p>

          <div className="mt-10 space-y-16">
            {githubSteps.map((s, i) => (
              <div key={s.title}>
                <h4 className="text-xl font-semibold">{s.title}</h4>
                <p className="mt-2 text-base text-gray-400 leading-relaxed max-w-2xl">
                  {s.desc}
                </p>
                {i === 3 && (
                  <pre className="mt-4 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-gray-300 overflow-x-auto">
                    <code>{gitCommands}</code>
                  </pre>
                )}
                <div className="mt-5 rounded-xl border border-white/10 overflow-hidden bg-black/40">
                  <Image
                    src={s.img}
                    alt={s.title}
                    className="w-full h-auto"
                    placeholder="blur"
                    sizes="(min-width: 1024px) 1024px, 100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="run" className="py-20 border-t border-white/5">
          <h2 className="text-sm tracking-widest uppercase text-gray-500">
            로컬에서 실행하기
          </h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            나만의 포트폴리오 만들기
          </h3>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-2xl">
            AI에게 <span className="text-white">“Next.js 기반으로 내 포트폴리오
            사이트 초기 프로젝트를 만들어줘”</span> 라고 요청해보세요. AI가
            폴더 구조를 잡고 필요한 파일을 생성해줍니다.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold">① AI에게 프로젝트 생성 요청</h4>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                예시 프롬프트:
              </p>
              <pre className="mt-3 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap">
                <code>{`Next.js 14 + TypeScript + Tailwind CSS로 디자이너 포트폴리오 사이트의 초기 프로젝트를 만들어줘.
- Hero 섹션, About, Projects, Contact 섹션 포함
- 다크 테마 기반
- 반응형`}</code>
              </pre>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold">② 의존성 설치</h4>
              <p className="mt-2 text-sm text-gray-400">
                생성된 프로젝트 폴더로 이동한 뒤 패키지를 설치합니다.
              </p>
              <pre className="mt-3 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{`npm install`}</code>
              </pre>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold">③ 개발 서버 실행</h4>
              <pre className="mt-3 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{`npm run dev`}</code>
              </pre>
              <p className="mt-3 text-sm text-gray-400">
                브라우저에서{" "}
                <code className="text-violet-300">http://localhost:3000</code>{" "}
                을 열면 화면이 뜹니다.
              </p>
            </div>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            여기서부터가 진짜 바이브 코딩. AI에게 “랜딩 섹션을 이렇게 바꿔줘”,
            “내 프로젝트 카드 추가해줘” 라고 계속 요청하면서 사이트를 키워
            나가세요.
          </p>
        </section>

        <section id="deploy" className="py-20 border-t border-white/5">
          <h2 className="text-sm tracking-widest uppercase text-gray-500">
            배포하기
          </h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Vercel로 세상에 공개
          </h3>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-2xl">
            로컬에서만 돌아가던 사이트를 인터넷 주소가 있는 진짜 웹사이트로
            만드는 과정입니다.
          </p>

          <div className="mt-10 space-y-16">
            {vercelSteps.map((s) => (
              <div key={s.title}>
                <h4 className="text-xl font-semibold">{s.title}</h4>
                <p className="mt-2 text-base text-gray-400 leading-relaxed max-w-2xl">
                  {s.desc}
                </p>
                <div className="mt-5 rounded-xl border border-white/10 overflow-hidden bg-black/40">
                  <Image
                    src={s.img}
                    alt={s.title}
                    className="w-full h-auto"
                    placeholder="blur"
                    sizes="(min-width: 1024px) 1024px, 100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 border-t border-white/5">
          <h2 className="text-sm tracking-widest uppercase text-gray-500">
            Tips
          </h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            수정사항을 GitHub에 반영하기
          </h3>
          <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
            AI와 함께 코드를 고쳤다면, 그 변경사항을 GitHub에 올려야 Vercel이
            새 버전을 배포합니다. 이 과정은{" "}
            <span className="text-white">add → commit → push</span> 세 단계로
            이뤄집니다.
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold">① 변경된 파일 확인하기</h4>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                지금 어떤 파일이 수정됐는지 먼저 봅니다. 빨간 글씨가
                변경된(또는 새로 추가된) 파일입니다.
              </p>
              <pre className="mt-3 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{`git status`}</code>
              </pre>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold">② 변경사항 스테이징 (add)</h4>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                커밋에 포함할 파일을 “담는” 단계. 보통{" "}
                <code className="text-violet-300">.</code> (현재 폴더 전체)을
                써서 모든 변경사항을 한 번에 담습니다.
              </p>
              <pre className="mt-3 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{`git add .`}</code>
              </pre>
              <p className="mt-3 text-xs text-gray-500">
                * 특정 파일만 담고 싶다면{" "}
                <code className="text-violet-300">
                  git add app/page.tsx
                </code>{" "}
                처럼 경로를 지정할 수 있습니다.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold">③ 커밋 메시지 작성 (commit)</h4>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                담아둔 변경사항에 <span className="text-white">“뭘 바꿨는지”</span>
                설명을 붙여 저장합니다. 나중에 히스토리를 볼 때 이 메시지가
                기록으로 남습니다.
              </p>
              <pre className="mt-3 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{`git commit -m "Hero 섹션 문구 수정"`}</code>
              </pre>
              <p className="mt-3 text-sm text-gray-400">좋은 커밋 메시지 예시:</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-400 list-disc list-inside">
                <li>
                  <code className="text-violet-300">
                    &quot;프로젝트 카드 3개 추가&quot;
                  </code>
                </li>
                <li>
                  <code className="text-violet-300">
                    &quot;About 섹션 배경색 변경&quot;
                  </code>
                </li>
                <li>
                  <code className="text-violet-300">
                    &quot;모바일에서 네비게이션 깨지는 버그 수정&quot;
                  </code>
                </li>
              </ul>
              <p className="mt-3 text-xs text-gray-500">
                * &quot;수정&quot;, &quot;업데이트&quot; 같은 두루뭉술한 메시지보다{" "}
                <span className="text-gray-400">무엇을</span> 바꿨는지
                구체적으로 적는 게 좋습니다.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 p-6">
              <h4 className="font-semibold">④ GitHub에 올리기 (push)</h4>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                내 컴퓨터에 저장된 커밋을 GitHub 원격 저장소로 전송합니다.
              </p>
              <pre className="mt-3 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{`git push`}</code>
              </pre>
              <p className="mt-3 text-sm text-gray-400">
                push가 끝나면{" "}
                <span className="text-white">Vercel이 자동으로 감지</span>
                해서 새 버전을 다시 빌드하고 배포합니다. 보통 30초~1분이면
                배포 주소에 반영돼요.
              </p>
            </div>

            <div className="rounded-xl border border-violet-400/30 bg-violet-500/5 p-6">
              <h4 className="font-semibold text-violet-200">
                한 번에 정리하면
              </h4>
              <pre className="mt-3 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-gray-300 overflow-x-auto">
                <code>{`git status
git add .
git commit -m "어떤 변경을 했는지 한 줄로"
git push`}</code>
              </pre>
              <p className="mt-3 text-sm text-gray-400">
                코드를 바꿀 때마다 이 네 줄만 기억하면 됩니다.
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm text-gray-500">
            — AI에게 뭔가를 시킬 때는 “무엇을 하고 싶은지 + 결과가 어떻게
            보였으면 좋겠는지”를 같이 전달하면 훨씬 좋은 결과가 나옵니다.
          </p>
        </section>

        <footer className="py-10 border-t border-white/5 text-xs text-gray-500">
          © {new Date().getFullYear()} Vibe Starter. Built with Next.js.
        </footer>
      </main>
    </>
  );
}
