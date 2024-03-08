import Post from '../models/Post.mjs'

export const GetAllPosts = async (req, res) => {
	const posts = await Post.find({})
	res.send(posts)
}
export const GetPostById = async (req, res) => {
	try {
		const id = req.params.id
		const post = await Post.findById(id)
		res.send(post)
	} catch (error) {
		res.status(404).json({
			status: 'error',
			message: "Couldn't find post"
		})
	}
}
export const CreatePost = async (req, res) => {
	try {
		const post = new Post(req.body)
		await post.save()
		res.send(post)
	} catch (error) {
		res.status(400).json(error)
	}
}
export const UpdatePost = async (req, res) => {
	try {
		const id = req.params.id
		const data = req.body
		const post = await Post.findByIdAndUpdate(id, data)
		res.json({
			status: 'success',
			message: 'Updated post'
		})
	} catch (error) {
		res.status(400).json(error)
	}
}
export const DeletePost = async (req, res) => {
	try {
		const id = req.params.id
		await Post.findByIdAndDelete(id)
		res.json({
			status: 'success',
			message: 'Deleted post'
		})
	} catch (error) {
		res.status(400).json(error)
	}
}
