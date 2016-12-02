var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect("userlist");
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {"userlist" : docs, title: "Welcome"});
    });
});

/* GET New User page. */
router.get('/signup', function(req, res) {
    res.render('signup', { title: 'Sign Up' });
});

/* POST to Add User Service */
router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var firstName = req.body.first_name;
    var lastName = req.body.last_name;
    var age = req.body.age;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.insert({
        "first_name" : firstName,
        "last_name" : lastName,
        "age": age
    }, function (err, user) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // And forward to success page
            res.redirect("userlist");
        }
    });
});

router.get('/signin', function(req, res) {
    res.render('signin', { title: 'Sign In' });
});

router.get('/auth', function(req, res) {

});

module.exports = router;
