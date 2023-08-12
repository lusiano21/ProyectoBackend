import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import routers from "./routes/index.router.js";
import __dirname from './utils.js';
import path from 'path'

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose
.set('strictQuery', true)
.connect(process.env.MONGO_URL)

app.use(express.json());
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, './public')))
app.use('/', routers)

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
