import express, { json } from 'express';
import env from "dotenv"
import connection from './connection.js';
import router from './router.js';
import cors from "cors"
env.config()

const app = express();

app.use(cors())
app.use(express.json({limit:"100mb"}))
app.use("/api",router)

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server started on port http://localhost:${process.env.PORT}`)
    })
})