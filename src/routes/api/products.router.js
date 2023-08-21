import { Router } from 'express'
import { authJWTMiddleware } from '../../utils/configBcrypt.js'
import { uploader } from '../../utils/multer.js'
import {
  get,
  create,
  getById,
  updateById,
  removeById,
} from '../../controllers/products.js'

const router = Router()

router.get('/products', authJWTMiddleware('admin'), async (req, res, next) => {
  try {
    const products = await get(req.query)
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
})

router.post('/products',uploader.single('image'),authJWTMiddleware('admin'), async (req, res, next) => {
  try {
    const {name, id, menu, price} = req.body
    const { file } = req
    console.log("name",name)
    console.log("products",id, menu, price)
    console.log("file", file)
    const products = await create({
      name, 
      id,
      menu,
      price,
      image:`${process.env.NODE_HOST}static/img/${file.originalname}`
    })
    console.log('Resultado final',products)
    res.status(201).json(products)
  } catch (error) {
    next(error)
  }
})

router.get('/products/:id',authJWTMiddleware('admin'), async (req, res, next) => {
  try {
    const products = await getById(req.params.id)
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
})

router.put('/products/:id',authJWTMiddleware('admin'), async (req, res, next) => {
  try {
    const products = await updateById(req.params.id, req.body)
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
})

router.delete('/products/:id',authJWTMiddleware('admin'), async (req, res, next) => {
  try {
    const products = await removeById(req.params.id)
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
})

export default router