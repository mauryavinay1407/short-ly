import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-black w-full dark:border dark:border-white/[0.1]">
      <Head>
        <title>Short-ly - URL Shortener</title>
        <meta name="description" content="Shorten your URLs effortlessly with Short-ly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 md:px-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-200 mb-4">
          Welcome to <span className="text-yellow-300">Short-ly</span>
        </h1>

        <p className="mt-3 text-lg md:text-2xl text-gray-300">
          Shorten your URLs effortlessly and share them with the world.
        </p>

        <div className="mt-8 md:mt-10 flex w-full max-w-sm md:max-w-lg mx-auto">
          <input
            type="text"
            className="w-full p-2 md:p-3 rounded-l-lg text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-800 text-gray-200"
            placeholder="Paste your URL here"
          />
          <button className="bg-yellow-300 p-2 md:p-3 rounded-r-lg text-lg font-bold text-black hover:bg-yellow-400">
            Shorten
          </button>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-16 md:h-24 border-t border-gray-700 mt-8 md:mt-0">
        <a
          className="flex items-center justify-center text-gray-400 text-sm md:text-base"
          href="https://github.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
         © 2024 All Rights Reserved
        </a>
      </footer>
    </div>
  );
}
