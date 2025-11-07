'use client'
import { useSongs } from '@/app/context/SongsContext'
import React from 'react'

interface Song {
  _id: string
  title: string
  lyrics: string
  uploader: string
  createdAt: string
}

function BhajaneDetailPage ({ params }: { params: Promise<{ id: string }> }) {
  const { getById, loading } = useSongs()
  const resolvedParam = React.use(params)
  const song = getById(resolvedParam.id)

  if (loading) return <div className='py-10 text-center'>Loading...</div>
  if (!song) return <div className='py-10 text-center'>Song not found</div>

  // Remove inline styles but keep tags
  const cleanLyrics = song.lyrics.replace(/style="[^"]*"/g, '')

  return (
    <div className='bg-[#fff7f1] px-4 sm:px-8 py-8 min-h-screen'>
      <h1 className='mb-6 font-bold text-orange-700 text-2xl sm:text-3xl text-center'>
        {song?.title || 'No title found'}
      </h1>

      <div className='bg-white shadow-md mx-auto p-6 sm:p-8 rounded-2xl max-w-3xl text-center leading-relaxed'>
        <div
          className='mb-6 text-gray-800 text-lg leading-relaxed lyrics-content'
          dangerouslySetInnerHTML={{
            __html: cleanLyrics || 'No lyrics available'
          }}
        />
        <p className='text-gray-500 text-sm text-center'>
          By: {song?.uploader}
        </p>
      </div>
    </div>
  )
}
export default BhajaneDetailPage
