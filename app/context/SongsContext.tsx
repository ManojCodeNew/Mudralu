'use client'
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react'

interface Song {
  _id: string
  title: string
  lyrics: string
  uploader: string
  createdAt: string
}

interface SongsContextType {
  songs: Song[]
  loading: boolean
  error: string | null
  fetchData: () => Promise<void>
  addData: (songData: Omit<Song, '_id' | 'createdAt'>) => Promise<void>
  updateData: (id: string, songData: Partial<Song>) => Promise<void>
  deleteData: (id: string) => Promise<void>
  getById: (id: string) => Song | null
}

const SongsContext = createContext<SongsContextType | undefined>(undefined)

export const useSongs = () => {
  const context = useContext(SongsContext)
  if (!context) {
    throw new Error('useSongs must be used within SongsProvider')
  }
  return context
}

export const SongsProvider = ({ children }: { children: ReactNode }) => {
  const [songs, setSongs] = useState<Song[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  //   Fetch Data
  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/songs')
      if (!response.ok) throw new Error('Failed to fetch songs')
      const data = await response.json()
      setSongs(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  //   Add Data
  const addData = async (songData: Omit<Song, '_id' | 'createdAt'>) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/songs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(songData)
      })
      if (!response.ok) throw new Error('Failed to add song')
      await fetchData()
      //   return response;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  // Update Data
  const updateData = async (id: string, songData: Partial<Song>) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/songs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(songData)
      })
      if (!response.ok) throw new Error('Failed to update song')
      await fetchData()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  // Delete Data
  const deleteData = async (id: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`/api/songs/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) throw new Error('Failed to delete song')
      await fetchData()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  // Get By Id
  const getById = (id: string): Song | null => {
    return songs.find(song => song._id === id) || null
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <SongsContext.Provider
      value={{
        songs,
        loading,
        error,
        fetchData,
        addData,
        updateData,
        deleteData,
        getById
      }}
    >
      {children}
    </SongsContext.Provider>
  )
}
