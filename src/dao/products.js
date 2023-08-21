import ProductsModel from '../models/products.js'
import ProductsDTO from '../dto/Products.js'
export const createProducts = (products) => {
  const productsDto = new ProductsDTO(products)
  return ProductsModel.create(productsDto)
}

export const getProducts = (query) => {
  return ProductsModel.find(query)
}

export const getProductsById = (id) => {
  return ProductsModel.findById(id)
}

export const updateProductsById = (id, data) => {
  return ProductsModel.updateOne({ _id: id }, data)
}

export const deleteProductsById = (id) => {
  return ProductsModel.deleteOne({ _id: id })
}