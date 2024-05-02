export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-[url('../assets/img/pexels-pixabay-301614.jpg')] bg-center bg-cover">
      <h1 className="text-lg text-center p-2">
        Environment
      </h1>
      <article className="flex gap-2 w-screen justify-center p-2">
        <p>Next14</p>
        <p>TailwindCss</p>
        <p>Jest</p>
      </article>
    </main>
  );
}
