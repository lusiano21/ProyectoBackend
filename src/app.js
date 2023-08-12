import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import routers from "./routes/index.router.js";
import __dirname from './utils.js';
import path from 'path'
import passport from 'passport';
import initPassport from './config/passport.config.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose
.set('strictQuery', true)
.connect(process.env.MONGO_URL)

app.use(express.json());
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, './public')))

initPassport()
app.use(passport.initialize())
app.use('/', routers)

app.use((error, req, res, next) => {
    console.error('Error en el middelware', error)
    res
      .status(error.status || 500)
      .send({ message: error.message })
  })

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
