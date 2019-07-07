const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json({ hello: 'world' });
});

router.get('/users', function(req, res, next) {
  const users = new Array(5).fill('test');
  res.status(200).json(users);
});

module.exports = router;
