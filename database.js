"use strict";
// const mysql = require("mysql");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("speculatool", "root", "root", { host: "192.168.99.100", port: 3306});

const Word = sequelize.define("word", {
  // id: Sequelize.INT,
  word: Sequelize.STRING
});

class Database {
  constructor() {
  }

  static findAllWord(callback) {
    // Word.create({ word: "音楽"})
    //     .catch(err => {
    //       console.log("ERROR");
    //       console.log(err);
    //     })
    //     .then(result => {
    //       console.log(result);
    //     });
    Word.findAll()
        .then(function(result) {
          console.log(result);
          callback(result);
        });
  }
}

module.exports = Database;
