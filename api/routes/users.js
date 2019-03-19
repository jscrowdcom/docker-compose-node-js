var express = require('express');
const db = require('../db')
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await db.User.findAll()

  res.json(users)
});

module.exports = router;
