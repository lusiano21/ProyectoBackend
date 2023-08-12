import passport from 'passport'
//import { Strategy as GithubStrategy } from 'passport-github2'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
//import UserModel from '../models/usuario.js'

function cookieExtractor(req) {
  let token = null
  if (req && req.cookies) {
    token = req.cookies.token
  }
  return token
}

const initPassport = () => {

  /*const githubOptions = {
    clientID: config.github.ClientId,
    clientSecret: config.github.ClientSecret,
    callbackURL: config.github.CallbackURL,
  }
  passport.use(new GithubStrategy(githubOptions, async (accessToken, refreshToken, profile, done) => {
    try {
      console.log('profile', profile)
      let user = await UserModel.findOne({ email: profile._json.email })
      if (!user) {
        user = await UserModel.create({
          nombre: profile._json.name,
          apellido: '',
          email: profile._json.email,
          edad: 18,
          password: '',
        })
      }
      console.log('user', user);
      done(null, user)
    } catch (error) {
      return done(new Error('Error al obtener el usuario:' + error.message))
    }
  }))
  */
  passport.use('jwt', new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: process.env.CLUE_JWT_SECRET,
  }, (payload, done) => {
    return done(null, payload)
  }))
}

export default initPassport