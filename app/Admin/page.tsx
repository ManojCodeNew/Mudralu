'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import AddLyrics from './add-lyrics/page'
import ManageLyrics from './manage-lyrics/page'

export default function Admin () {
  const [activeTab, setActiveTab] = useState<'add' | 'manage' | null>('add')
 
  const renderComponent = () => {
    switch (activeTab) {
      case 'add':
        return <AddLyrics />
      case 'manage':
        return <ManageLyrics />
      default:
        return <AddLyrics />
    }
  }

  return (
    <div className='flex flex-col p-4 md:p-6 min-h-screen text-gray-800'>
      {/* Menu Section */}
      <section className='flex flex-wrap justify-center md:justify-start items-center gap-4 bg-[#FBE7A1] mb-4 p-4 rounded-xl outline-none'>
        <button
          onClick={() => setActiveTab('add')}
          className={`px-6 py-2 rounded-lg cursor-pointer border transition-all duration-300 font-medium ${
            activeTab === 'add'
              ? 'bg-gray-200 focus:border-blue-400 scale-105'
              : 'bg-white hover:bg-gray-100 border-gray-300'
          }`}
        >
          Add Lyrics
        </button>
        <button
          onClick={() => setActiveTab('manage')}
          className={`px-6 py-2 rounded-lg border cursor-pointer transition-all duration-300 font-medium ${
            activeTab === 'manage'
              ? 'bg-gray-200 focus:border-blue-400 scale-105'
              : 'bg-white hover:bg-gray-100 border-gray-300'
          }`}
        >
          Manage Lyrics
        </button>
      </section>

      {/* Component Render Area */}
      <main className='flex-1 shadow border-amber-100 rounded-xl overflow-auto'>
        <div className='m-0 p-0 w-full h-full'>{renderComponent()}</div>
      </main>
    </div>
  )
}
