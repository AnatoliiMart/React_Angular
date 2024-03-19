import express from 'express'
import PostsRouter from './routes/PostRoutes.mjs'
import AuthRouter from './routes/AuthRoutes.mjs'
import dbConnection from './db/index.mjs'
import cors from 'cors'
const app = express()
const port = 4000

app.use(express.json())
app.use(cors())
dbConnection.on('error', () => console.log('DbConnection error'))
dbConnection.on('connected', () => console.log('DbConnection connected'))

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.use('/posts', PostsRouter)
app.use('/', AuthRouter)

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
