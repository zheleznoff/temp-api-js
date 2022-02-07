const { DataTypes } = require("sequelize");

module.exports = model;

// Цех

function model(sequelize) {
    const attributes = {
        PODRAZD_ID: {
            type: DataTypes.DECIMAL(38,0),
            allowNull: false,
            primaryKey: true
        },
        PR_ID: {
            type: DataTypes.DECIMAL(38,0),
            allowNull: false
        },
        PDR_OKATO: {
            type: DataTypes.STRING(11),
            allowNull: true
        },
        PDR_NO: {
            type: DataTypes.DECIMAL(38,0),
            allowNull: true,
            defaultValue: 0
        },
        PDR_NAME: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        PDR_ADRES: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        PDR_X0: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        PDR_Y0: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        PDR_UGOL: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        PRTER_ID: {
            type: DataTypes.DECIMAL(10,0),
            allowNull: true,
            defaultValue: 0
        },
        PDR_NAME_ENG: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        PDR_ADRES_ENG: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        PDR_ARHIV: {
            type: DataTypes.DECIMAL(1,0),
            allowNull: true
        },
        PDR_OKATO_OLD: {
            type: DataTypes.STRING(11),
            allowNull: true
        }
    };

    const options = {
        sequelize,
        tableName: 'ALL_PODRAZD',
        // schema: 'dbo',
        timestamps: false,
        indexes: [
          {
            name: "PK11",
            unique: true,
            fields: [
              { name: "PODRAZD_ID" },
            ]
          },
          {
            name: "PRTER_ID",
            fields: [
              { name: "PRTER_ID" },
            ]
          },
          {
            name: "REF1311",
            fields: [
              { name: "PR_ID" },
            ]
          },
        ]
    };

    return sequelize.define("PGU_SOURCE_TIME", attributes, options);
}