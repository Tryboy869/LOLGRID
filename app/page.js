import MemeFeed from '@/components/lolgrid/MemeFeed'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-orange-500">
              🤣 LOLGRID
            </h1>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                📸 Upload Meme
              </button>
            </div>
          </div>
        </div>
      </header>
      <MemeFeed />
    </main>
  )
}
