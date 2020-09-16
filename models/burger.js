const orm = require('../config/orm'); 

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    addBurger: function(col, val, cb) {
        orm.insertBurger("burgers", col, val, function(res) {
            cb(res);
        });
    },
    update: function(valToSet, condition, cb) {
        orm.updateBurger("burgers", valToSet, condition, function(res) {
            cb(res);
        });
    }

};

module.exports = burger;