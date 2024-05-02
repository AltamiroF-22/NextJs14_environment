export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-sm bg-blue-900 w-screen text-center p-2">
        Environment
      </h1>
      <article className="flex gap-2 w-screen justify-center bg-slate-400 p-2">
        <p>Next.js 14</p>
        <p>TailwindCss</p>
        <p>Jest</p>
      </article>
    </main>
  );
}
