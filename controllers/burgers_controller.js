var express = require('express');

var router = express.Router();

var burger = require('../models/burger');

//const conStrBoolean = (str) => str == "true";

// Create the router for the app, and export the router at the end of your file.
router.get('/', function (req, res) {
  console.log('get');
  burger.selectAll(function (data) {
    var obj1 = {
      burgers: data
    };
    console.log(obj1);
    res.send("hi");
  });
});

//router.post
router.post('/burgers', function (req, res) {
  //const devoured = conStrBoolean(req.body.devoured)
  burger.addBurger(
    ['burger_name, Devoured'],
    [req.body.name, Devoured],
    function (result) {
      res.json({ id: result.id });
    });
});

//router.put
router.put('/api/burgers/id', function (req, res) {
  var condition = 'id = ' + req.params.id;
  const devoured = conStrBoolean(req.body.devoured);
  console.log('id of devoured burger: ', condition);

  burger.update({ devoured }, condition, function (result) {
    if (result.changeRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
})

//burger.update

module.exports = router;