const express = require('express');
const userServices = require('./services/user');

const router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json({ hello: 'world' });
});

router.get('/users', async (req, res) => {
  const result = await userServices.index();
  res.status(200).json(result);
});

router.post('/users', async (req, res) => {
  const result = await userServices.create(req.body);
  res.status(200).json(result);
});

module.exports = router;
