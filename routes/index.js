var express = require('express');
var store = require ('../store');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var tweets = store.list();
	res.render('index', { title: 'Twitter.js', tweets: tweets,show_form: true });
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
