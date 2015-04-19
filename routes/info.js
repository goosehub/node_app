var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info', { 
  	title: 'info',
	bar: 'Hello Everyone',
	supplies: ['mop', 'broom', 'duster']
  });
});


module.exports = router;
