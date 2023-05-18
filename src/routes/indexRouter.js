import express from 'express';

const router = express.Router();

router
  .get('/', (req, res) => {
    res.redirect('/services')
  })
  .get('/about', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/policy', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })

export default router;
