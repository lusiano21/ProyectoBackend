import express  from "express";
import BusinessModel from "../../models/products.js";
import CommunsUtil from "../../utils/utils.views.js";
//import passport from "passport";
const router = express.Router();

router.get('/', async(req, res)=> {
  const { query: { limit = 5, page = 1, sort} } = req
  const options = {
    limit,
    page,
  }
  if (sort) {
    options.sort = { grade: sort }
  }
  const result = await BusinessModel.paginate({}, options)
  res.render('products', CommunsUtil.buidResponse({ ...result, sort }))
});
router.get('/create', async(req, res)=> {
  res.render('create',{style:'index.css'})
});
router.get('/register', async(req, res)=> {
  res.render('register',{style:'index.css'})
});
router.get('/reset', async(req, res)=> {
  res.render('reset')
});
router.get('/new-password', async (req, res) => {
  console.log('token', req.query.token)
  if (req.query.token) {
    res.send(`
    <div>
      <h1>Reset password 🛅</h1>
      <form action="/new-password" method="POST">
        <input type="email" name="email" placeholder="Email" />
        <button type="submit">Send</button>
      </form>
    </div>
    `)

  } else {
    res.send(`
  <div>
    <h1>No puedes estar acá 😥</h1>
  </div>
  `)
  }
})
//router.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }))
export default router;