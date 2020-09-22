const connection = require('./connection'); 


function printQuestion(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// get method
var orm = {
    selectAll: function (tableName, cb) {
        var queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
          cb(result);
        })
    },
    // post method
    insertBurger: function (table, cols, vals, cb) {
        var queryString = 'INSERT INTO ' + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestion(vals.length);
        queryString += "); ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) { throw err }
            cb(result);

        })
    },
    // put method
    updateBurger: function (table, valsToSet, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ?";
        queryString += " WHERE ";
        queryString += condition;
        queryString += ";";
        console.log(queryString);

        connection.query(queryString, [valsToSet], function (err, result) {
            if (err) { throw err };
            cb(result);
        });

    }
}

    module.exports = orm;