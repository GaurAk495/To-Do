import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import authRouter from './routes/authRouter.js'
import taskRouter from './routes/taskRouter.js'
import cors from 'cors'
import connectDB from './model/db.js'
const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    console.log(req.url, req.method, req.body)
    next()
})

app.use('/api/auth', authRouter)
app.use('/tasks', taskRouter)
app.get("/quotes", async (req, res) => {
    try {
        const response = await fetch("https://zenquotes.io/api/quotes");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch quotes" });
    }
});
app.use((req, res, next) => {
    res.status(404).send('Page not Found');
});

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
    await connectDB()
    console.log(`The Server is Running on http://localhost:${PORT}`)
})