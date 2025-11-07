'use client'
import React, { useState, useEffect, useRef } from 'react'
import { FiBold, FiItalic } from 'react-icons/fi'
import { useSongs } from '@/app/context/SongsContext'

export default function AddLyrics () {
  const [title, setTitle] = useState<string>('')
  const [placeholderIndex, setPlaceholderIndex] = useState<number>(0)
  const [mounted, setMounted] = useState(false)
  const textareaRef = useRef<HTMLDivElement>(null)
  const [savedSelection, setSavedSelection] = useState<Range | null>(null)

  const { addData } = useSongs()

  const placeholders: string[] = [
    'Start writing your lyrics here...',
    'ನಿಮ್ಮ ಸಾಹಿತ್ಯವನ್ನು ಇಲ್ಲಿ ಬರೆಯಿರಿ...',
    'Write something creative...'
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setPlaceholderIndex(prevIndex => (prevIndex + 1) % placeholders.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [placeholders.length])

  const saveSelection = () => {
    const selection = window.getSelection()
    if (selection && selection.rangeCount > 0) {
      setSavedSelection(selection.getRangeAt(0))
    }
  }

  const restoreSelection = () => {
    if (savedSelection) {
      const selection = window.getSelection()
      selection?.removeAllRanges()
      selection?.addRange(savedSelection)
    }
  }
  const applyFormat = (command: string) => {
    restoreSelection()
    document.execCommand(command, false, undefined)
    setContent(getContent())
    textareaRef.current?.focus()
  }

  const getContent = () => {
    return textareaRef.current?.innerHTML || ''
  }

  const [content, setContent] = useState('')


  const handlePublish = async () => {
    if (!title || !content) {
      console.log('Title :', title, 'Content', content)

      alert('Please fill in both title and lyrics')
      return
    }

    try {
      await addData({
        title,
        lyrics: content,
        uploader: 'Admin'
      })
      alert('Song published successfully!')
      setTitle('')
      setContent('')
      if (textareaRef.current) {
        textareaRef.current.innerHTML = ''
      }
    } catch {
      alert('Error publishing song')
    }
  }

  return (
    <div className='bg-amber-50 min-h-screen text-gray-800'>
      {/* Navbar */}
      <header className='flex justify-between items-center bg-amber-100 shadow-lg px-6 py-4 font-bold'>
        <h1 className='p-2 rounded-lg font-semibold text-lg'>Add Lyrics</h1>
        <button
          onClick={handlePublish}
          title='Publish your Lyrics'
          className='bg-blue-600 hover:bg-blue-300 px-4 py-2 rounded-lg text-white transition cursor-pointer'
        >
          Publish
        </button>
      </header>

      {/* Main Content */}
      <main className='mx-auto p-6 max-w-3xl'>
        {/* Title Input */}
        <input
          type='text'
          value={title}
          title='Type your lyrics title'
          placeholder='Title here...'
          onChange={e => setTitle(e.target.value)}
          className='bg-transparent mt-6 pb-2 border-gray-200 focus:border-blue-400 border-b focus:outline-none w-full font-bold text-2xl transition'
        />

        {/* Toolbar */}
        <div className='flex items-center gap-3 mt-5 pb-2 border-gray-200 border-b text-gray-600'>
          <FiBold
            className='text-xc hover:text-blue-500 cursor-pointer'
            onMouseDown={e => e.preventDefault()}
            onClick={() => applyFormat('bold')}
            title='Bold (Ctrl+B)'
          />
          <FiItalic
            className='text-xc hover:text-blue-500 cursor-pointer'
            onMouseDown={e => e.preventDefault()}
            onClick={() => applyFormat('italic')}
            title='Italic (Ctrl+I)'
          />
        </div>

        {/* Content */}
        <div
          ref={textareaRef}
          contentEditable
          title='Write your Lyrics here'
          onMouseUp={saveSelection}
          onKeyUp={saveSelection}
          onInput={() => setContent(getContent())}
          suppressContentEditableWarning
          className='bg-transparent mt-6 border-none outline-none w-full min-h-64 text-lg leading-relaxed'
          data-placeholder={mounted ? placeholders[placeholderIndex] : placeholders[0]}
          style={{
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word'
          }}
        />
      </main>
      <style jsx>{`
        [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
          pointer-events: none;
          display: block;
        }
        [contenteditable]:focus:empty:before {
          content: attr(data-placeholder);
        }
        [contenteditable] {
          outline: none;
        }
      `}</style>
    </div>
  )
}
