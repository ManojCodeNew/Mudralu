export interface Song {
  _id: string
  title: string
  lyrics: string
  uploader: string
  createdAt: string
  updatedAt: string
}

export interface CreateSongData {
  title: string
  lyrics: string
  uploader?: string
}
