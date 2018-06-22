var express = require('express');
var router = express.Router();
var cars = require('../model/usedcars.model')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Post home page. */

router.post('/',function(req,res,next){
  
  var newcustomer = new cars(req.body);
  
  newcustomer.save(
  
  function (err, data) {
  
  if (err) return console.error(err);
  
  console.log("success")
  
  res.send("sucess")  
  }
  
  )
  });
module.exports = router;
