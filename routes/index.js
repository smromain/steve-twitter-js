var express = require('express');
var store = require ('../store');
var models = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	models.Tweet.findAll({include:[models.User]}).success(function(tweets) {
		res.render('index', {title: 'Twitter.js', tweets: tweets})
	});
});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  var id = store.randomizedID();
  store.push(name, text, id);
  io.sockets.emit("new_tweet", {name:name, text:text, id: id});
  res.redirect('/');
});

module.exports = router;
