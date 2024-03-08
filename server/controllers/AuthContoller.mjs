import User from '../models/User.mjs'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const register = async (req, res) => {
	try {
		const user = new User(req.body)
		await user.save()
		res.json(user)
	} catch (error) {
		res.status(400).json(error)
	}
}

const login = async (req, res) => {
	const user = await User.findOne({ email: req.body.email })
	if (!user) {
		return res.status(404).json({
			status: 'Error',
			message: 'User not found'
		})
	}

	const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
	if (!isPasswordMatch) {
		return res.status(404).json({
			status: 'Error',
			message: 'Incorrect password'
		})
	}

	const jwtToken = jwt.sign({ userId: user._id }, 'Random', {
		expiresIn: '24h'
	})
	res.json({
		jwtToken,
		user
	})
}

const getAuthUser = async (req, res) => {
	const userId = req.user
	const user = await User.findById(userId)
	if (!user) {
		return res.status(404).json({
			status: 'Error',
			message: 'User not found'
		})
	}
	res.json(user)
}

export default { register, login, getAuthUser }
