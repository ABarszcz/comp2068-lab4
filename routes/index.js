var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'My Family'
  });
});

/* GET Anthony page. */
router.get('/anthony', function(req, res, next) {
  res.render('anthony', {
    title: 'Anthony Barszcz'
  });
});

/* GET David page. */
router.get('/david', function(req, res, next) {
  res.render('david', {
    title: 'David Barszcz'
  });
});

/* GET Connie page. */
router.get('/connie', function(req, res, next) {
  res.render('connie', {
    title: 'Connie Barszcz'
  });
});

/* GET Kiana page. */
router.get('/kiana', function(req, res, next) {
  res.render('kiana', {
    title: 'Kiana Barszcz'
  });
});

module.exports = router;
