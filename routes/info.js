var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info', { 
  	title: 'First App',
	bar: 'Hello Everyone',
	supplies: ['mop', 'broom', 'duster']
  });
});


module.exports = router;
