"use strict";
// const mysql = require("mysql");
const Sequelize = require("sequelize");
var conf = require('config');

const sequelize = new Sequelize(conf.database_name, "root", "", { host: "localhost", port: 3306});

const Word = sequelize.define("word", {
  word: Sequelize.STRING
});

class Database {
  constructor() {
  }

  static findAllWord(callback) {
    Word.sync();
    // for (var i = 0; i < 1998; i++) {
      // Word.create({ word: "スポーツ"})
      // .catch(err => {
      //   console.log("ERROR");
      //   console.log(err);
      // })
      // .then(result => {
      //   console.log(result);
      // });
    // }
    Word.findAll()
        .then(function(result) {
          // console.log(result);
          callback(result);
        });
  }
}

module.exports = Database;
