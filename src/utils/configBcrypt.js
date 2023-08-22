
import jsonwebtoken from 'jsonwebtoken'
import passport from 'passport'
import bcrypt from 'bcrypt';


const JWT_SECRET = process.env.CLUE_JWT_SECRET
import Exception from './exception.js'

export const tokenGenerator = (user) => {
  const payload = {
    id: user._id,
    nombre: user.nombre,
    apellido: user.apellido,
    edad: user.edad,
    email: user.email,
    rol: user.rol,
    dni: user.dni
  }
  const token = jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '24h' })
  return token
}
export const tokenGeneratorforReset = (user) => {
  const payload = {
    email: user.email,
  }
  const token = jsonwebtoken.sign(payload, JWT_SECRET, { expiresIn: '24h' })
  return token
}
export const isValidToken = (token) => {
  return new Promise((resolve) => {
    jsonwebtoken.verify(token, JWT_SECRET, (err, payload) => {
      if (err) {
        console.log('err', err)
        return resolve(false)
      }
      console.log('payload', payload)
      return resolve(payload)
    })
    return token
  })
}

export const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

export const validatePassword = (password, user) => {
  return bcrypt.compareSync(password, user.password)
}
export const authJWTMiddleware =  (roles) => (req, res, next) => {
  passport.authenticate('jwt', function (error, user, info) {  
    if (error) {
      return next(error)
    }
    if (!user) {
      return next(new Exception('No esta autentificado', 401))
    }
    if (!roles.includes(user.rol)) {
      return next(new Exception('No esta autorizado', 403))
    }
    if (user.rol === 'user' && req.params.uid && req.params.uid !== user.id) {
      return next(new Exception('No esta autorizado', 403))
    }
    req.user = user
    next()
  })(req, res, next)
}
