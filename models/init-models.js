var DataTypes = require("sequelize").DataTypes;
var _ALL_PR = require("./ALL_PR");
var _OTH_SPPREDPP_ORG = require("./OTH_SPPREDPP_ORG");

function initModels(sequelize) {
  var ALL_PR = _ALL_PR(sequelize, DataTypes);
  var OTH_SPPREDPP_ORG = _OTH_SPPREDPP_ORG(sequelize, DataTypes);

  ALL_PR.belongsTo(ALL_BANK, { as: "BANK", foreignKey: "BANK_ID"});
  ALL_BANK.hasMany(ALL_PR, { as: "ALL_PRs", foreignKey: "BANK_ID"});

  return {
    ALL_PR,
    OTH_SPPREDPP_ORG,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
