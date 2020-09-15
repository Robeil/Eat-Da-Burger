const connection = require('./connection'); 

// Helper function for printing the correct number of question marks.
function printQuestion(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// GET METHOD
var orm = {
    selectAll: function (tableName, cb) {
        var queryString = 'SELECT * FROM ' + tableName + ';';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    // POST METHOD
    insertBurger: function (table, cols, vals, cb) {
        var queryString = 'SELECT INTO ' + table;
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
    // PUT METHOD
    updateBurger: function (table, valsToSet, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ?";
        queryString += " WHERE ";
        queryString += condition;
        queryString += ";";

        //console.log
        console.log(queryString);

        connection.query(queryString, [valsToSet], function (err, result) {
            if (err) { throw err };
            cb(result);
        });

    }
}

    module.exports = orm;