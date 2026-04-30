import Link from "next/link";
import Nav from "@/components/Nav";

const prdPrompt = `이런 아이디어가 있어: [한두 줄로 적기]

이걸 만들 PRD를 써줘.
- 누가 쓰는지 (한 명만 콕 집어서)
- 어떤 화면이 있는지
- 각 화면에서 뭘 할 수 있는지
- 가장 핵심이 되는 한 가지 기능

긴 문서 말고 한 페이지 분량으로.`;

const planPrompt = `방금 만든 PRD를 PLAN.md로 정리해줘.

- 만들 순서대로 단계 나누기
- 각 단계는 30분~1시간 안에 끝낼 분량
- 체크박스 형식 ([ ])
- 가장 먼저 “화면 한 개라도 보이게 만들기” 단계가 와야 함`;

const codePrompt = `@PLAN.md 보고 1단계부터 시작하자.
1단계가 끝나면 PLAN.md의 체크박스를 [x]로 바꿔주고,
바로 다음 단계로 넘어가지 말고 한 번 멈춰서 결과를 보여줘.`;

export default function Day2() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-24 md:py-32">
          <Link
            href="/"
            className="text-sm text-slate-400 hover:text-slate-200 transition"
          >
            ← Vibe Coding Study
          </Link>
          <p className="mt-6 text-violet-400 text-sm tracking-widest uppercase">
            Day 2
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold tracking-tight">
            계획부터 세우는 <br />
            바이브 코딩.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300 leading-relaxed">
            손이 가는 대로 시키지 말고, 만들고 싶은 걸 먼저 글로 정리하기.<br />
            <span className="text-white">PRD → PLAN.md → 코딩</span> 순서로
            진행하면 AI가 길을 잃지 않습니다.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#mission"
              className="rounded-lg bg-violet-500 text-white px-5 py-2.5 text-sm font-medium hover:bg-violet-400 transition"
            >
              미션 보기
            </a>
            <a
              href="#step1"
              className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
            >
              Step 1로 →
            </a>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <h2 className="text-sm tracking-widest uppercase text-slate-400">
            왜 계획부터?
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-slate-200 leading-relaxed">
            짧은 프롬프트로 큰 걸 시키면 AI는 매번 다른 결과를 낸다. 만들고
            싶은 걸 한 번 글로 정리해두면, 같은 문서를 보며 일관된 결과를
            만들어준다. <span className="text-violet-300">계획이 곧 컨텍스트.</span>
          </p>
        </section>

        <section id="mission" className="py-20 border-t border-white/10">
          <h2 className="text-sm tracking-widest uppercase text-slate-400">
            오늘의 미션
          </h2>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            각자 만들어보고 싶었던 아이디어
          </h3>
          <p className="mt-4 max-w-3xl text-slate-300 leading-relaxed">
            Day 1은 “포트폴리오”라는 정해진 결과물이었다.
            오늘은 <span className="text-white">평소에 만들어보고 싶었던 그 아이디어</span>
            를 꺼내볼 차례. 메모 앱, 운동 기록, 모임 정산기, 인형 가게 랜딩 —
            뭐든 좋다.
          </p>
          <p className="mt-4 max-w-3xl text-slate-400 text-sm leading-relaxed">
            완성이 목표가 아니라 <span className="text-slate-200">계획부터 세우는 흐름</span>을
            한 번 끝까지 따라가보는 게 목표.
          </p>
        </section>

        <section id="step1" className="py-20 border-t border-white/10">
          <p className="text-violet-400 text-xs tracking-widest uppercase">
            Step 1
          </p>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            PRD를 AI에게 먼저 시키기
          </h3>
          <p className="mt-4 max-w-3xl text-slate-300 leading-relaxed">
            PRD는 <span className="text-white">“무엇을 만들지”</span>를 적은
            한 페이지짜리 문서. 코딩 시작 전에 이걸 먼저 만든다.
          </p>

          <div className="mt-8 rounded-xl border border-white/15 bg-white/[0.03] p-6">
            <h4 className="font-semibold">예시 프롬프트</h4>
            <pre className="mt-3 rounded-lg border border-white/15 bg-white/[0.03] bg-slate-950/60 p-4 text-sm text-slate-200 overflow-x-auto whitespace-pre-wrap">
              <code>{prdPrompt}</code>
            </pre>
            <p className="mt-4 text-sm text-slate-300">
              결과가 길거나 어색하면 “더 짧게”, “타겟 사용자를 한 명으로
              좁혀줘”, “기능을 3개만 남겨줘” 라고 다시 시켜본다. 마음에 들면{" "}
              <code className="text-violet-300">PRD.md</code>로 저장.
            </p>
          </div>
        </section>

        <section id="step2" className="py-20 border-t border-white/10">
          <p className="text-violet-400 text-xs tracking-widest uppercase">
            Step 2
          </p>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            PLAN.md / TODO.md 만들기
          </h3>
          <p className="mt-4 max-w-3xl text-slate-300 leading-relaxed">
            PRD가 “무엇을”이라면 PLAN은{" "}
            <span className="text-white">“어떤 순서로”</span>. AI에게 시키자.
          </p>

          <div className="mt-8 rounded-xl border border-white/15 bg-white/[0.03] p-6">
            <h4 className="font-semibold">예시 프롬프트</h4>
            <pre className="mt-3 rounded-lg border border-white/15 bg-white/[0.03] bg-slate-950/60 p-4 text-sm text-slate-200 overflow-x-auto whitespace-pre-wrap">
              <code>{planPrompt}</code>
            </pre>
            <p className="mt-4 text-sm text-slate-300">
              핵심은 <span className="text-white">한 단계가 너무 크지 않게</span>
              쪼개는 것. 한 시간 안에 결과를 볼 수 있는 단위가 좋다.
            </p>
          </div>
        </section>

        <section id="step3" className="py-20 border-t border-white/10">
          <p className="text-violet-400 text-xs tracking-widest uppercase">
            Step 3
          </p>
          <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            문서를 보면서 바이브 코딩
          </h3>
          <p className="mt-4 max-w-3xl text-slate-300 leading-relaxed">
            이제 AI에게 <span className="text-white">PLAN.md를 가리키며</span>
            한 단계씩 시키면 된다. 길을 잃으면 다시 PLAN을 보게 한다.
          </p>

          <div className="mt-8 rounded-xl border border-white/15 bg-white/[0.03] p-6">
            <h4 className="font-semibold">예시 프롬프트</h4>
            <pre className="mt-3 rounded-lg border border-white/15 bg-white/[0.03] bg-slate-950/60 p-4 text-sm text-slate-200 overflow-x-auto whitespace-pre-wrap">
              <code>{codePrompt}</code>
            </pre>
            <p className="mt-4 text-sm text-slate-300">
              한 단계 끝날 때마다{" "}
              <code className="text-violet-300">git commit</code>으로 진행
              상황을 저장해두면, 다음 단계에서 망쳐도 되돌릴 수 있다.
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-violet-400/30 bg-violet-500/5 p-6">
            <h4 className="font-semibold text-violet-200">
              AI가 엉뚱한 길로 갈 때
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-200 list-disc list-inside">
              <li>“PLAN.md 다시 보고 지금 몇 단계인지 정리해줘”</li>
              <li>“PRD에 없는 기능은 만들지 마”</li>
              <li>“여기서 멈추고 지금까지 한 걸 요약해줘”</li>
            </ul>
          </div>
        </section>

        <section className="py-20 border-t border-white/10">
          <h2 className="text-sm tracking-widest uppercase text-slate-400">
            팁
          </h2>
          <ul className="mt-8 space-y-4 text-base text-slate-200 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-violet-400">→</span>
              <span>
                <span className="text-white">PRD는 한 페이지로 충분.</span>{" "}
                길어지면 핵심 한 가지에 집중해서 다시 줄인다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400">→</span>
              <span>
                <span className="text-white">PLAN은 30분~1시간 단위로 쪼갠다.</span>{" "}
                한 단계가 너무 크면 결과가 보이기도 전에 막힌다.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400">→</span>
              <span>
                <span className="text-white">막히면 AI에게 묻고 → 검색 → 옆 사람</span>.
                혼자 30분 이상 막히지 말기.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-violet-400">→</span>
              <span>
                결과가 마음에 안 들면{" "}
                <span className="text-white">“다시 해줘”보다 “이런 부분이 이래서 별로다”</span>
                라고 구체적으로 알려주면 훨씬 잘 고친다.
              </span>
            </li>
          </ul>
        </section>

        <section className="py-20 border-t border-white/10">
          <h2 className="text-sm tracking-widest uppercase text-slate-400">
            오늘 끝나면
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-slate-200 leading-relaxed">
            첫 화면 한 장이라도 동작하면 충분.{" "}
            <code className="text-violet-300">git push</code>해서 Vercel에
            올려보거나, 안 되면 로컬에서{" "}
            <code className="text-violet-300">npm run dev</code>로 데모.
          </p>
          <p className="mt-4 text-sm text-slate-400">
            완성보다 <span className="text-slate-200">PRD → PLAN → 코딩</span>{" "}
            흐름을 한 번 끝까지 돌려본 경험이 더 중요합니다.
          </p>
        </section>

        <div className="py-12 border-t border-white/10 flex justify-between text-sm">
          <Link
            href="/day1"
            className="text-slate-400 hover:text-slate-200 transition"
          >
            ← Day 1
          </Link>
          <Link href="/" className="text-slate-400 hover:text-slate-200 transition">
            홈으로
          </Link>
        </div>

        <footer className="py-10 text-xs text-slate-400">
          © {new Date().getFullYear()} Vibe Starter. Built with Next.js.
        </footer>
      </main>
    </>
  );
}
