var express = require('express');
var router = express.Router();
var mongo = require('mongodb');


/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');

  var o_id = mongo.ObjectID(req.params.id);
  user = collection.findOne({"_id": o_id}, function(err, doc){
    res.render('edit', { title: 'Edit User', user: doc });
  });
});

router.post('/:id', function(req, res, next) {
  // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var firstName = req.body.first_name;
    var lastName = req.body.last_name;
    var age = req.body.age;
    var user_id = req.body.user_id;

    var o_id = mongo.ObjectID(req.params.id);

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.update(
      {
        "_id": mongo.ObjectID(req.params.id)
      },
      {
        $set: {
          "first_name" : firstName,
          "last_name" : lastName,
          "age": age
        }
      }, function (err, docs) {
          if (err) {
              // If it failed, return error
              res.send("There was a problem adding the information to the database.");
          }
          else {
              // And forward to success page
              res.redirect("/");
          }
      });
});

router.get('/delete/:id', function(req, res, next) {
  // Set our internal DB variable
    console.log("delete");
    var db = req.db;

    // Get our form values. These rely on the "name" attributes

    var o_id = mongo.ObjectID(req.params.id);

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.remove(
      {
        "_id": mongo.ObjectID(req.params.id)
      }, function (err, docs) {
          if (err) {
              // If it failed, return error
              res.send("There was a problem adding the information to the database.");
          }
          else {
              // And forward to success page
              res.redirect("/");
          }
      });
});


module.exports = router;
