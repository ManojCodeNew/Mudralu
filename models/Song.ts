import mongoose from 'mongoose'

const SongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lyrics: { type: String, required: true },
  uploader: { type: String, default: 'Admin' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.models.bhajane || mongoose.model('bhajane', SongSchema)
