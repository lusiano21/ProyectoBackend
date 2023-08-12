import { Router } from 'express'
import { authJWTMiddleware } from '../../utils/configBcrypt.js'
import {
  get,
  getById,
  create,
  resolve,
  removeById
} from '../../controllers/orders.js'

const router = Router()

router.get('/order',authJWTMiddleware("admin"), async (req, res, next) => {
  try {
    const orders = await get(req.query)
    res.status(200).json(orders)
  } catch (error) {
    next(error)
  }
})

router.post('/order',authJWTMiddleware(["user","admin"]), async (req, res, next) => {
  try {
    const order = await create(req.body)
    console.log(order)
    res.status(201).json(order)
  } catch (error) {
    next(error)
  }
})

router.get('/order/:id', authJWTMiddleware(["user", "admin"]), async (req, res, next) => {
  try {
    const order = await getById(req.params.id)
    res.status(200).json(order)
  } catch (error) {
    next(error)
  }
})

router.put('/order/:id/resolve',authJWTMiddleware(["admin"]), async (req, res, next) => {
  try {
    const order = await resolve(req.params.id, req.body)
    res.status(200).json(order)
  } catch (error) {
    next(error)
  }
})
router.delete('/order/:id', authJWTMiddleware(['admin']), async (req,res,next) => {
try {
  const order = await removeById(req.params.id)
  res.status(200).json(order)
} catch (error) {
  next(error)
}
})

export default router