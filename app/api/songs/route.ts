import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Song from '@/models/Song'

export async function GET () {
  await dbConnect()
  const songs = await Song.find({}).sort({ createdAt: -1 })
  return NextResponse.json(songs)
}

export async function POST (request: NextRequest) {
  await dbConnect()
  const body = await request.json()
  const song = await Song.create(body)
  return NextResponse.json(song)
}
