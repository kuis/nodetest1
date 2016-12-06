var express = require('express');
var router = express.Router();


/* GET home page. */
// router.get('/', function(req, res) {
//   // res.render('index', { title: 'Express' });
//   res.redirect("userlist");
// });

router.get('/', function(req, res) {
  res.render('index', {title: 'Express'}); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;
