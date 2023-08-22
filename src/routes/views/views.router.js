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
  res.render('reset',{style:'reset.js'})
});
//router.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }))
export default router;