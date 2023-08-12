import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import routers from "./routes/index.router.js";
import __dirname from './utils.js';
import path from 'path'
import passport from 'passport';
import initPassport from './config/passport.config.js';
import { addLogger } from './utils/logger.js'
import { socketInit } from './socketServer.js';

const app = express();
app.use(addLogger)
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
    req.logger.warning( 'Cuidado ',error)
    res
      .status(error.status || 500)
      .send({ message: error.message })
  })

socketInit(app)
app.listen(PORT,()=>console.log(`Listening on ${PORT}`))