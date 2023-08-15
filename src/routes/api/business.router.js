import { Router } from 'express'
import { authJWTMiddleware } from '../../utils/configBcrypt.js'
import {
  get,
  create,
  getById,
  updateById,
  removeById,
} from '../../controllers/business.js'

const router = Router()

router.get('/business', authJWTMiddleware('admin'), async (req, res, next) => {
  try {
    const business = await get(req.query)
    res.status(200).json(business)
  } catch (error) {
    next(error)
  }
})

router.post('/business',authJWTMiddleware('admin'), async (req, res, next) => {
  try {
    const {name, id, menu, price} = req.body
    const { file } = req
    console.log("name",name)
    console.log("products",id, menu, price)
    console.log("file", file)
    const business = await create({
      name, 
      products,
      image:`${process.env.NODE_HOST}static/img/${file.originalname}`
    })
    console.log('Resultado final',business)
    res.status(201).json(business)
  } catch (error) {
    next(error)
  }
})

router.get('/business/:id',authJWTMiddleware('admin'), async (req, res, next) => {
  try {
    const business = await getById(req.params.id)
    res.status(200).json(business)
  } catch (error) {
    next(error)
  }
})

router.put('/business/:id',authJWTMiddleware('admin'), async (req, res, next) => {
  try {
    const business = await updateById(req.params.id, req.body)
    res.status(200).json(business)
  } catch (error) {
    next(error)
  }
})

router.delete('/business/:id',authJWTMiddleware('admin'), async (req, res, next) => {
  try {
    const business = await removeById(req.params.id)
    res.status(200).json(business)
  } catch (error) {
    next(error)
  }
})

export default router