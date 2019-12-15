// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + "(" + cols + ") VALUES ('" + vals + "')";


        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function (table, col, val, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + col + "=" + val + " WHERE " + condition;

        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

module.exports = orm;
