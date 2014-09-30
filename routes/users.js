var express = require('express');
var router = express.Router();
var store = require('../store.js')
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/:name', function(req, res) {
  models.Tweet.findAll({include:[models.User], where: {"User.name": req.params.name}}).success(function(tweets) {
		res.render('index', {title: 'Twitter.js', tweets: tweets})
	})
});

router.get('/:name/tweet/:id', function(req, res) {
  models.Tweet.findAll({include:[models.User], where: {"Tweet.id": req.params.id}}).success(function(tweets) {
		res.render('index', {title: 'Twitter.js', tweets: tweets})
	})
});

module.exports = router;
