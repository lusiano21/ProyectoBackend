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
  //res.status(200).send(CommunsUtil.buidResponse({ ...result, sort }))
});


//router.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }))
export default router;