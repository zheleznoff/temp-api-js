const { DataTypes } = require('sequelize');
const db = require('_helpers/db');

module.exports = model;

// Поставщики/получатели отходов

function model(sequelize) {
    const attributes = {
      SPPREDPP_ORG_ID: {
        type: DataTypes.DECIMAL(5,0),
        allowNull: false,
        primaryKey: true
      },
      SPO_NAME: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      SPO_ADRES: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      SPO_INN: {
        type: DataTypes.STRING(12),
        allowNull: true
      },
      PR_ID: {
        type: DataTypes.DECIMAL(10,0),
        allowNull: true
      },
      spo_tip: {
        type: DataTypes.DECIMAL(1,0),
        allowNull: true
      },
      SPO_OKATO: {
        type: DataTypes.STRING(11),
        allowNull: true
      }
    };

    const options = {
      sequelize,
      tableName: 'OTH_SPPREDPP_ORG',
      // schema: 'dbo',
      timestamps: false,
      indexes: [
        {
          name: "SYS_C00402522",
          unique: true,
          fields: [
            { name: "SPPREDPP_ORG_ID" },
          ]
        },
      ]
    }

    return sequelize.define(
      'OTH_SPPREDPP_ORG',
      attributes,
      options
    )

}