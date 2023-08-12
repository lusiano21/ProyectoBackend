import { Router } from 'express'
import { authJWTMiddleware } from '../../utils/configBcrypt.js'
import { me, get, updateById, removeById, getById } from '../../controllers/usuarios.js'

const router = Router()
router
  .get('/user', authJWTMiddleware('admin'), get)
  .get('/user/:uid', authJWTMiddleware(['admin', 'user']), getById)
  .get('/me', authJWTMiddleware(['admin','user']), me)
  .put('/user/:uid', authJWTMiddleware(['admin', 'user']), updateById)
  .delete('/user/:uid', authJWTMiddleware(['admin', 'user']), removeById)

export default router