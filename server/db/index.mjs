import mongoose from 'mongoose'

mongoose.connect(
	'mongodb+srv://anatoliimart6:qwerty111@cluster0.sxme7xy.mongodb.net/Web221?retryWrites=true&w=majority&appName=Cluster0',
)
export default mongoose.connection
