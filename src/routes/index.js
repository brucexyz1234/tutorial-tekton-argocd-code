var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'bruce 7 Cloud Native demo Feb 28th!' });
});

module.exports = router;
