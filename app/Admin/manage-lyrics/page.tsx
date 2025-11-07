'use client'
import React, { useState, useRef } from 'react'
import { useSongs } from '@/app/context/SongsContext'

interface Song {
  _id: string
  title: string
  lyrics: string
  uploader: string
  createdAt: string
}

export default function Page () {
  const { songs, loading, error, deleteData, updateData } = useSongs()
  const [editingSong, setEditingSong] = useState<string | null>(null)
  const [editTitle, setEditTitle] = useState('')
  const [editLyrics, setEditLyrics] = useState('')
  const editRef = useRef<HTMLDivElement>(null)

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this song?')) {
      await deleteData(id)
    }
  }

  const handleEdit = (song: Song) => {
    setEditingSong(song._id)
    setEditTitle(song.title)
    setEditLyrics(song.lyrics)
    setTimeout(() => {
      if (editRef.current) {
        editRef.current.innerHTML = song.lyrics
      }
    }, 0)
  }

  const handleUpdate = async (id: string) => {
    if (!editTitle.trim() || !editLyrics.trim()) {
      alert('Please fill in both title and lyrics')
      return
    }
    try {
      await updateData(id, {
        title: editTitle,
        lyrics: editLyrics
      })
      setEditingSong(null)
      setEditTitle('')
      setEditLyrics('')
    } catch {
      alert('Error updating song')
    }
  }

  const handleCancel = () => {
    setEditingSong(null)
    setEditTitle('')
    setEditLyrics('')
  }

  const cleanHtml = (html: string) => {
    const div = document.createElement('div')
    div.innerHTML = html
    return div.textContent || div.innerText || ''
  }

  if (loading) return <div className='py-10 text-center'>Loading...</div>
  if (error)
    return <div className='py-10 text-red-500 text-center'>Error: {error}</div>

  return (
    <div className='p-6 text-center'>
      <h2 className='mb-4 font-semibold text-xl'>Manage Existing Lyrics</h2>
      <div className='justify-items-center gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {songs.map(song => (
          <div key={song._id} className='inline-flex bg-white shadow mb-4 p-4 rounded-lg'>
            {editingSong === song._id ? (
              <div className='space-y-3'>
                <input
                  type='text'
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  className='p-2 border rounded w-full font-bold'
                  placeholder='Title'
                />
                <div
                  ref={editRef}
                  contentEditable
                  onInput={e => setEditLyrics(e.currentTarget.innerHTML)}
                  className='p-2 border rounded outline-none w-full h-82 overflow-auto text-left'
                  style={{
                    whiteSpace: 'pre-wrap',
                    wordWrap: 'break-word'
                  }}
                  suppressContentEditableWarning
                />
                <div className='flex justify-center gap-2'>
                  <button
                    onClick={() => handleUpdate(song._id)}
                    className='bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-white'
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className='bg-gray-500 hover:bg-gray-600 px-3 py-1 rounded text-white'
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className='font-bold'>{song.title}</h3>
                <p className='mb-4 text-gray-600 text-sm sm:text-base leading-relaxed'>
                  {cleanHtml(song.lyrics).slice(0, 60)}...
                </p>
                <p className='text-gray-500 text-sm'>By: {song.uploader}</p>
                <div className='flex justify-center gap-2 mt-2'>
                  <button
                    onClick={() => handleEdit(song)}
                    className='bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(song._id)}
                    className='bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white'
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
