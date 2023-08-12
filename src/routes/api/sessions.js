import passport from 'passport'
import UsuarioModel from "../../models/usuario.js";
import { uploader } from '../../utils/multer.js';
import { Router } from 'express'
import { create } from '../../controllers/usuarios.js';
import { tokenGenerator, createHash, validatePassword} from '../../utils/configBcrypt.js';

const router = Router()

router.post('/login', async (req,res) => {
  const { body: { email, password } } = req
      const user = await UsuarioModel.findOne({ email }) //serch({gmail}) 
      if (!user) {
        return res.status(401).json({ message: 'gmail or password incorrect' })
      }
      if (!validatePassword(password, user)) {
        return res.status(401).json({ message: 'gmail or password incorrect' })
      }
      const token = tokenGenerator(user)
      res.cookie('token', token, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true,
      }).status(200).json({ success: true })
})
router.post('/register', uploader.single('avatar'), create)

router.post('/reset', async (req, res) => {
    const {
      body: {
        email,
        password,
      }
    } = req
    if (
      !email ||
      !password
    ) {
      alert('El usuario o contraseña son incorrectas')
      //return res.render('reset', { error: 'Todo los campos debe venir en la solicitud.' })
    }
    const user = await UsuarioModel.findOne({ email })
    if (!user) {
      //return res.render('reset', { error: 'Email no existe.' })
      alert(' El usuario o contraseña son incorrectas')
    }
    user.password = createHash(password)
    await UsuarioModel.updateOne({ email }, user) 
    res.redirect('/static/login')
})
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    req.session.user = req.user
    res.redirect('/profile')
  });
router.post('/sign-out', (req, res) => {
    res.clearCookie('token').status(200).json({ success: true })
  })
export default router;
