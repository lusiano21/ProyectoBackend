import BusinessModel from '../models/business.js'
import BusinesDTO from '../dto/Business.js'
export const createBusiness = (business) => {
  const businesDto = new BusinesDTO(business)
  console.log(businesDto)
  return BusinessModel.create(businesDto)
}

export const getBusinesses = (query) => {
  return BusinessModel.find(query)
}

export const getBusinessById = (id) => {
  return BusinessModel.findById(id)
}

export const updateBusinessById = (id, data) => {
  return BusinessModel.updateOne({ _id: id }, data)
}

export const deleteBusinessById = (id) => {
  return BusinessModel.deleteOne({ _id: id })
}