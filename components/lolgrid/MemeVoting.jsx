'use client'
import { useState } from 'react'

export default function MemeVoting({ initialVotes = { laugh: 0, meh: 0, wtf: 0, legendary: 0 } }) {
  const [votes, setVotes] = useState(initialVotes)
  const [userVote, setUserVote] = useState(null)

  const handleVote = (voteType) => {
    if (userVote === voteType) {
      // Annuler le vote
      setVotes(prev => ({ ...prev, [voteType]: prev[voteType] - 1 }))
      setUserVote(null)
    } else {
      // Nouveau vote ou changement
      if (userVote) {
        setVotes(prev => ({ ...prev, [userVote]: prev[userVote] - 1 }))
      }
      setVotes(prev => ({ ...prev, [voteType]: prev[voteType] + 1 }))
      setUserVote(voteType)
    }
  }

  return (
    <div className="flex gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
      <button 
        onClick={() => handleVote('laugh')}
        className={`flex items-center gap-1 px-3 py-1 rounded ${userVote === 'laugh' ? 'bg-yellow-200' : 'hover:bg-gray-200'}`}
      >
        🤣 {votes.laugh}
      </button>
      <button 
        onClick={() => handleVote('meh')}
        className={`flex items-center gap-1 px-3 py-1 rounded ${userVote === 'meh' ? 'bg-gray-300' : 'hover:bg-gray-200'}`}
      >
        😐 {votes.meh}
      </button>
      <button 
        onClick={() => handleVote('wtf')}
        className={`flex items-center gap-1 px-3 py-1 rounded ${userVote === 'wtf' ? 'bg-purple-200' : 'hover:bg-gray-200'}`}
      >
        🤨 {votes.wtf}
      </button>
      <button 
        onClick={() => handleVote('legendary')}
        className={`flex items-center gap-1 px-3 py-1 rounded ${userVote === 'legendary' ? 'bg-red-200' : 'hover:bg-gray-200'}`}
      >
        🔥 {votes.legendary}
      </button>
    </div>
  )
}
