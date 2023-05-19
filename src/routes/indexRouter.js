import express from 'express';

const router = express.Router();

// NAVIGATION
router
  .get('/', (req, res) => {
    res.redirect('/services')
  })
  .get('/services', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/about', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/jobs', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/contacts', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/calculation', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/policy', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  });

// Services
router
  .get('/multimodal', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/cargo', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/railways', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/declaration', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/rent', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/air', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/cars', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/sea', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  });

// FAQ
router.get('/declarationInfo', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
})
  .get('/railwaysInfo', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/cargoInfo', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })
  .get('/worldInfo', (req, res) => {
    const initState = {};
    res.render('Layout', initState);
  })

export default router;
