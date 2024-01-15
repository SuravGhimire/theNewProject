import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'



const app = express()
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('public'))

app.use(cookieParser())


// routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/products", productRouter)


export default app