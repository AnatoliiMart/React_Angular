import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: [true, 'Content is required'] },
})

const Post = mongoose.model('Post', schema)

export default Post
