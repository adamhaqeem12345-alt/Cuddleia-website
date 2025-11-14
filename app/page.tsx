import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-black">
      <main className="flex flex-col items-center gap-8 px-8 py-16">
        <div className="flex flex-col items-center gap-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={37}
            priority
          />
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Next.js Full Stack Starter
          </h1>
          <p className="max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400">
            A modern full-stack web application with Next.js, Tailwind CSS, PostgreSQL, and ready for Vercel deployment.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              ⚡ Tech Stack
            </h2>
            <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
              <li>• Next.js 16 + React 19</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS 4</li>
              <li>• PostgreSQL</li>
              <li>• Vercel Ready</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              🚀 Features
            </h2>
            <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
              <li>• RESTful API Routes</li>
              <li>• Database Integration</li>
              <li>• Docker Support</li>
              <li>• Type Safety</li>
              <li>• Security Headers</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/api/health"
            className="flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Check API Health
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            View on GitHub
          </a>
        </div>

        <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-50">
            📚 API Endpoints
          </h3>
          <div className="space-y-1 font-mono text-sm text-zinc-600 dark:text-zinc-400">
            <div>GET /api/health - Health check</div>
            <div>GET /api/users - List all users</div>
            <div>POST /api/users - Create user</div>
            <div>GET /api/users/[id] - Get user</div>
            <div>PUT /api/users/[id] - Update user</div>
            <div>DELETE /api/users/[id] - Delete user</div>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-zinc-500 dark:text-zinc-600">
          <p>Read the README.md for setup instructions</p>
        </div>
      </main>
    </div>
  );
}
