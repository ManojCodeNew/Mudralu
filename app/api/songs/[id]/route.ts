import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Song from '@/models/Song'

export async function GET (
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()
    const song = await Song.findById(params.id)
    if (!song) {
      return NextResponse.json({ error: 'Song not found' }, { status: 404 })
    }
    return NextResponse.json(song)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch song' }, { status: 500 })
  }
}

export async function PUT (
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()
    const body = await request.json()
    const song = await Song.findByIdAndUpdate(
      params.id,
      { ...body, updatedAt: new Date() },
      { new: true }
    )
    if (!song) {
      return NextResponse.json({ error: 'Song not found' }, { status: 404 })
    }
    return NextResponse.json(song)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update song' },
      { status: 500 }
    )
  }
}

export async function DELETE (
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()
    const song = await Song.findByIdAndDelete(params.id)
    if (!song) {
      return NextResponse.json({ error: 'Song not found' }, { status: 404 })
    }
    return NextResponse.json({ message: 'Song deleted successfully' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete song' },
      { status: 500 }
    )
  }
}
