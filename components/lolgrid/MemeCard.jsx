'use client'
import Image from 'next/image'
import MemeVoting from './MemeVoting'

export default function MemeCard({ meme }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden mb-4">
      <div className="p-3 border-b">
        <div className="flex items-center gap-2">
          <span className="font-medium">{meme.author}</span>
          <span className="text-sm text-gray-500">{meme.category}</span>
          <span className="text-sm text-gray-400">• {meme.timeAgo}</span>
        </div>
      </div>

      <div className="relative">
        <Image
          src={`https://picsum.photos/600/400?random=${meme.id}`}
          alt="Meme"
          width={600}
          height={400}
          className="w-full h-auto"
          unoptimized
        />
      </div>

      <div className="p-3">
        <MemeVoting initialVotes={meme.votes} />
      </div>
    </div>
  )
}
