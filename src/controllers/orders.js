import {
  getOrders,
  createOrder,
  getOrderById,
  updateOrderById,
  deleteOrderById
} from '../dao/order.js'
import {
  getUserById,
  updateUserById
} from '../dao/user.js'
import {
  getProductsById,
} from '../dao/products.js'
//import twilioService from '../servicios/twilio.service.js'
import emailService from '../servicios/email.service.js'
import { NotFoundException } from '../utils/exception.js'

export const get = async (query = {}) => {
  const orders = await getOrders(query)
  return {
    status: 'success',
    payload: orders,
  }
}

export const create = async (body) => {
  let {
    user: userId,
    product: productId,
    products: productsRequest,
  } = body
  const user = await getUserById(userId)
  if (!user) {
    throw new NotFoundException('User not found')
  }
  const products = await getProductsById(productId)
  if (!products) {
    throw new NotFoundException('Products not found')
  }
  const trolley = productsRequest.reduce((result, item)=> {
    const product = products.products.find((product) => product.id == item.product)
    if (product) {
      if(product.price == item.price && product.stock >= item.quantity){
        result.push({
        id: item.product,
        price: product.price,
        quantity: item.quantity,
      })
      }
      return result
    }
    return result
  }, [])
  const total = trolley.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)
  if(trolley.length !== 0){
    const newOrder = {
    user: user.id,
    product: products.id,
    products: trolley,
    total,
    status:'completed'
  }
  const order = await createOrder(newOrder)
  user.orders.push(`${order.id}`)
  await updateUserById(`${user.id}`, user)
  let prueba = products.products
  let prueba2 = order.products
  console.log('Nombre del Menu',products.products.menu)
  console.log('Cantidad del Menu',order.products.quantity)
  console.log('Menu',prueba.menu)
  console.log('Cantidad',prueba2.quantity)
  await emailService.sendEmail(
    `${user.email}`,
    'Compra en Rappiplay',
    `
    <div>
      <h1>Hola ${user.fullname}.</h1>
      <p>Somos de Rappiplay y queremos contarte que tu order se enviado con exito.</p>
      <table>
        <tr>
          <th>Factura</th>
        </tr>
        <tr>
          <td>Id: ${order.id}</td>
        </tr>
          <td>Usuario: ${user.email}</td>
        </tr>
        <tr>
          <td>Producto: ${products.products.menu} 
        </tr>
        <tr>
          <td>Cantidad: ${order.products.quantity} 
        </tr>
        <tr>   
           <td>Total: ${order.total}</td>
        </tr>
        <tr>
           <td>Fecha: ${order.createdAt}</td>
        </tr>
      </table>
      <p>Muchas gracias por tu orden.</p>
    </div>
    `
  )
  return {
    status: 'success',
    payload: order,
  }
  }else{
    const newOrder = {
      user: user.id,
      product: products.id,
      products: trolley,
      total,
      status:'canceled'
    }
    const order = await createOrder(newOrder)
    user.orders.push(`${order.id}`)
    await updateUserById(`${user.id}`, user)
    return {
      status: 'success',
      payload: order,
    }
  }
  //const result = await twilioService.sendSMS(`+54${user.phone.toString()}`, `Hola muchas gracias por tu compra`)
}

export const getById = async (id) => {
  const order = await getOrderById(id)
  if (!order) {
    throw new NotFoundException('Order not found')
  }
  return {
    status: 'success',
    payload: order,
  }
}

export const updateById = async (id, body) => {
  const order = await getOrderById(id)
  if (!order) {
    throw new NotFoundException('Order not found')
  }
  const result = await updateOrderById(id, body)
  return {
    status: 'success',
    payload: result,
  }
}

export const removeById = async (id) => {
  const order = await getOrderById(id)
  if (!order) {
    throw new NotFoundException('Order not found')
  }
  const result = await deleteOrderById(id)
  return {
    status: 'success',
    payload: result,
  }
}

export const addProduct = async (id, body) => {
  const order = await getOrderById(id)
  if (!order) {
    throw new NotFoundException('Order not found')
  }
  const { products } = body
  order.products = products
  await updateOrderById(id, order)
  return {
    status: 'success',
    payload: order,
  }
}

export const resolve = async (id, body) => {
  const order = await getOrderById(id)
  if (!order) {
    throw new NotFoundException('Order not found')
  }

  const { status } = body
  order.status = status
  await updateOrderById(id, order)

  return {
    status: 'success',
    payload: order,
  }
}