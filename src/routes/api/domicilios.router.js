import { Router } from 'express'
import { authJWTMiddleware } from '../../utils/configBcrypt.js'
import DomiciliosControllers from '../../controllers/domicilios.js'

const router = Router()

router
  .post('/domicilios', authJWTMiddleware('user','admin'), DomiciliosControllers.create)
  .get('/domicilios', authJWTMiddleware('admin'), DomiciliosControllers.get)
  .get('/domicilios/:id', authJWTMiddleware(['user','admin']), DomiciliosControllers.getById)
  .put('/domicilios/:id', authJWTMiddleware(['user','admin']), DomiciliosControllers.updateById)
  .delete('/domicilios/:id', authJWTMiddleware('admin'), DomiciliosControllers.deleteById)

export default router