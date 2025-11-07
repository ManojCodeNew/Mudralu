'use client'
import React from 'react'
import { useSongs } from '../context/SongsContext'

interface Song {
  _id: string
  title: string
  lyrics: string
  uploader: string
  createdAt: string
}

export default function BhaktigeetheList () {

  const { songs, loading, error } = useSongs()

  const cleanHtml = (html: string) => {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.textContent || div.innerText || ''
  }

  if (loading) return <div className='py-10 text-center'>Loading...</div>
  if (error)
    return <div className='py-10 text-red-500 text-center'>Error: {error}</div>


  return (
    <div className='bg-[#fff7f1] px-4 sm:px-6 md:px-10 py-10 min-h-screen'>
      <h1 className='mb-10 font-bold text-orange-500 text-2xl sm:text-3xl md:text-4xl text-center'>
        ಭಕ್ತಿ ಗೀತೆಗಳ ಸಂಗ್ರಹ
      </h1>

      {/* Responsive Grid */}
      <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {songs.map((bhajane: Song) => (
          <div
            key={bhajane._id}
            onClick={() =>
              (window.location.href = `/Bhaktigeethe/lyrics/${bhajane._id}`)
            }
            className='bg-white shadow-md hover:shadow-lg p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300'
          >
            <h2 className='mb-2 font-bold text-gray-900 text-lg sm:text-xl'>
              {bhajane.title}
            </h2>
            <p className='mb-4 text-gray-600 text-sm sm:text-base leading-relaxed'>
              {cleanHtml(bhajane.lyrics).slice(0, 60)}...
            </p>

            <p className='text-gray-500 text-sm'>
              <span className='font-semibold text-gray-800'>Author:</span>{' '}
              {bhajane.uploader}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}