export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to CuddleIA
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your AI-powered platform
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
            Get Started
          </button>
          <button className="px-6 py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50">
            Learn More
          </button>
        </div>
      </div>
    </main>
  )
}
