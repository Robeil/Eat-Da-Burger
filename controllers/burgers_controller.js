
var express = require('express');

var router = express.Router();

var burger = require('../models/burger');

//get router  and export the router
router.get('/', function (req, res) {
  console.log('getting it');
  burger.selectAll(function (data) {
    var obj1 = {
      burgers: data
    };
    console.log(obj1);
    res.render("index", obj1 );

  });
});

//post router
router.post('/api/burgers', function (req, res) {
console.log('posting here:', req.body)
  burger.addBurger(

    ['burger_name, devoured'],
    [req.body.name, req.body.devoured],

    function (result) {
      res.json({ id: result.id });
    });
});

//put router
router.put('/api/burgers/:id', function (req, res) {

  var condition = 'id = ' + req.params.id;
  console.log('devoured burger: ', condition);

  burger.update( {devoured:req.body.devoured } , condition, function (result) {

    if (result.changeRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})

module.exports = router;