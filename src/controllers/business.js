import {
    getBusinesses,
    createBusiness,
    getBusinessById,
    updateBusinessById,
    deleteBusinessById,
  } from '../dao/business.js'
  
  export const get = async (query = {}) => {
    const business = await getBusinesses(query)
    return {
      status: 'success',
      payload: business,
    }
  }
  
  export const create = async (body) => {
    const business = await createBusiness(body)
    return {
      status: 'success',
      payload: business,
    }
  }
  
  export const getById = async (id) => {
    const business = await getBusinessById(id)
    if (!business) {
      res.json({ status: 404 , message: 'Nose encontro el business' })
    } else {
      return {
      status: 'success',
      payload: business,
    }
    }
    
  }
  
  export const updateById = async (id, body) => {
    const business = await getBusinessById(id)
    if (!business) {
      res.json({ status: 404 , message: 'Nose encontro el business' })
    } else {
      const result = await updateBusinessById(id, body)
    return {
      status: 'success',
      payload: result,
    }
    }
    
  }
  
  export const removeById = async (id) => {
    const business = await getBusinessById(id)
    if (!business) {
      res.json({ status: 404 , message: 'Nose encontro el business' })
    } else {
      const result = await deleteBusinessById(id)
    return {
      status: 'success',
      payload: result,
    }
    }
  }