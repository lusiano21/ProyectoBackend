import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import routers from "./routes/index.router.js";
import __dirname from './utils.js';
import path from 'path'
import passport from 'passport';
import initPassport from './config/passport.config.js';
import { addLogger } from './utils/logger.js'
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(addLogger)
const PORT = process.env.PORT||8080;
const connection = mongoose
.set('strictQuery', true)
.connect(process.env.MONGO_URL)

app.use(express.json());
app.use(cookieParser());
const swaggerOptions = {
  definition:{
    openapi:'3.0.1',
    info:{
      title:'Adoptme API',
      description:'Esta es la documentación de la API de Adoptme. Una aplicación para adoptar mascotas',
    },
  },
  apis:[path.join(__dirname, 'docs','**','*.yaml')],
};
app.use('/static', express.static(path.join(__dirname, './public')))
const specs = swaggerJsDoc(swaggerOptions);

initPassport()
app.use(passport.initialize())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/', routers)

app.use((error, req, res, next) => {
    req.logger.warning( 'Cuidado ',error)
    res
      .status(error.status || 500)
      .send({ message: error.message })
  })

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))