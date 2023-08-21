import {
    getProducts,
    createProducts,
    getProductsById,
    updateProductsById,
    deleteProductsById,
  } from '../dao/products.js'
  
  export const get = async (query = {}) => {
    const products = await getProducts(query)
    return {
      status: 'success',
      payload: products,
    }
  }
  
  export const create = async (body) => {
    const products = await createProducts(body)
    return {
      status: 'success',
      payload: products,
    }
  }
  
  export const getById = async (id) => {
    const products = await getProductsById(id)
    if (!products) {
      res.json({ status: 404 , message: 'Nose encontro el business' })
    } else {
      return {
      status: 'success',
      payload: products,
    }
    }
    
  }
  
  export const updateById = async (id, body) => {
    const products = await getProductsById(id)
    if (!products) {
      res.json({ status: 404 , message: 'Nose encontro el products' })
    } else {
      const result = await updateProductsById(id, body)
    return {
      status: 'success',
      payload: result,
    }
    }
    
  }
  
  export const removeById = async (id) => {
    const products = await getProductsById(id)
    if (!products) {
      res.json({ status: 404 , message: 'Nose encontro el products' })
    } else {
      const result = await deleteProductsById(id)
    return {
      status: 'success',
      payload: result,
    }
    }
  }