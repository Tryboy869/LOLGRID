'use client'
import { useState, useEffect } from 'react'
import MemeCard from './MemeCard'

export default function MemeFeed() {
  const [memes, setMemes] = useState([])
  const [sortBy, setSortBy] = useState('hot')

  // Mock data pour démonstration
  useEffect(() => {
    const mockMemes = [
      {
        id: 1,
        author: "MemeKing",
        category: "Humour FR",
        timeAgo: "il y a 2h",
        imageUrl: "/api/placeholder/600/400",
        votes: { laugh: 142, meh: 3, wtf: 7, legendary: 89 }
      },
      {
        id: 2,
        author: "FunnyGirl",
        category: "Memes Déjantés",
        timeAgo: "il y a 4h",
        imageUrl: "/api/placeholder/600/400",
        votes: { laugh: 89, meh: 12, wtf: 24, legendary: 156 }
      }
    ]
    setMemes(mockMemes)
  }, [sortBy])

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Filtres de tri */}
      <div className="flex gap-2 mb-6 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
        {['hot', 'new', 'legendary', 'wtf'].map(filter => (
          <button
            key={filter}
            onClick={() => setSortBy(filter)}
            className={`px-4 py-2 rounded capitalize ${
              sortBy === filter 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {filter === 'hot' ? '🔥 Hot' : 
             filter === 'new' ? '✨ Nouveau' :
             filter === 'legendary' ? '🏆 Légendaire' : 
             '🤨 WTF'}
          </button>
        ))}
      </div>

      {/* Feed des memes */}
      <div>
        {memes.map(meme => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  )
}
