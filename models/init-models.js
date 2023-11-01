var DataTypes = require("sequelize").DataTypes;
var _author = require("./author");
var _dictionary = require("./dictionary");
var _idiom = require("./idiom");
var _poetry = require("./poetry");

function initModels(sequelize) {
  var author = _author(sequelize, DataTypes);
  var dictionary = _dictionary(sequelize, DataTypes);
  var idiom = _idiom(sequelize, DataTypes);
  var poetry = _poetry(sequelize, DataTypes);


  return {
    author,
    dictionary,
    idiom,
    poetry,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
