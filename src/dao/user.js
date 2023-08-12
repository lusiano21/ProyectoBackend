import UsuarioModel from '../models/usuario.js'
import UsuarioDTO from '../dto/Usuario.js'

export const createUser = (user) => {
    const constactDto = new UsuarioDTO(user)
    console.log('constactDto',constactDto)
    return UsuarioModel.create(constactDto)
  }

  export const getUsers = (query) =>  {
    return UsuarioModel.find(query)
  }

  export const getUserById = (id) => { 
    return UsuarioModel.findById(id)
  }

  export const getUserOne = (user) => {
    return UsuarioModel.findOne(user)
  }

  export const updateUserById = (id, data) => {
    return UsuarioModel.updateOne({ _id: id }, data )
  }

  export const deleteById = (id) => {
    return UsuarioModel.deleteOne({ _id: id })
  }