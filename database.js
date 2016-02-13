"use strict";
// const mysql = require("mysql");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("speculatool", "root", "root", { host: "192.168.99.100", port: 3306});

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
