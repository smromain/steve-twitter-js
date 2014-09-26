var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get(':name', function(req, res) {
  var name = req.params.name;
  var list = store.find({name: name});
 
  res.render('index', { title: 'Twitter.js - Posts by ' + name, user: name, tweets: list, show_form: true});
});

router.get(':name/tweet/:id', function(req, res) {
  var name = req.params.name;
  var id = Number(req.params.id);
  var list = store.find({name: name, id: id});
 
  res.render('index', { title: 'Twitter.js - Posts by ' + name, tweets: list });
});

module.exports = router;
