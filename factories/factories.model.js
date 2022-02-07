const { DataTypes } = require("sequelize");

module.exports = model;

// Предприятия

function model(sequelize) {
    const attributes = {
      PR_ID: {
        type: DataTypes.DECIMAL(38,0),
        allowNull: false,
        primaryKey: true
      },
      PR_LADA: {
        type: DataTypes.STRING(20),
        allowNull: true,
        defaultValue: "0"
      },
      PR_NAME: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      PR_INN: {
        type: DataTypes.STRING(13),
        allowNull: true
      },
      PR_OKPO: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      PR_OKATO: {
        type: DataTypes.STRING(11),
        allowNull: true
      },
      PR_OKONX: {
        type: DataTypes.STRING(5),
        allowNull: true
      },
      PR_PINDX: {
        type: DataTypes.STRING(6),
        allowNull: true
      },
      PR_ADRES: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      PR_RASCHET: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      PR_TEL: {
        type: DataTypes.STRING(26),
        allowNull: true
      },
      PR_EMAIL: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      PR_FAKS: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      PR_KVY: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      PR_KSOBST: {
        type: DataTypes.STRING(2),
        allowNull: true
      },
      PR_KOBE: {
        type: DataTypes.STRING(7),
        allowNull: true
      },
      PR_DIRECTO: {
        type: DataTypes.STRING(40),
        allowNull: true
      },
      PR_BUKHGAL: {
        type: DataTypes.STRING(40),
        allowNull: true
      },
      PR_OOOS: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      PR_KGL: {
        type: DataTypes.STRING(2),
        allowNull: true
      },
      PR_GUIV: {
        type: DataTypes.STRING(8),
        allowNull: true
      },
      PR_KPL: {
        type: DataTypes.STRING(2),
        allowNull: true
      },
      BANK_ID: {
        type: DataTypes.DECIMAL(38,0),
        allowNull: true,
        // references: {
        //   model: 'ALL_BANK',
        //   key: 'BANK_ID'
        // }
      },
      PR_VOZD: {
        type: DataTypes.STRING(1),
        allowNull: true
      },
      PR_OTH: {
        type: DataTypes.STRING(1),
        allowNull: true
      },
      PR_VODA: {
        type: DataTypes.STRING(1),
        allowNull: true
      },
      PR_RADIO: {
        type: DataTypes.STRING(1),
        allowNull: true
      },
      PR_CHS: {
        type: DataTypes.STRING(1),
        allowNull: true,
        defaultValue: "0"
      },
      PR_DATAINS: {
        type: DataTypes.DATE(),
        // type: "SMALLDATETIME",
        allowNull: true
      },
      PR_DATAMOD: {
        type: DataTypes.DATE(),
        // type: "SMALLDATETIME",
        allowNull: true
      },
      PR_MEMO: {
        type: DataTypes.STRING(250),
        allowNull: true
      },
      PR_PRTIPNAME: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      PR_STATE: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      PR_OKOPF: {
        type: DataTypes.STRING(5),
        allowNull: true
      },
      PR_OKOGU: {
        type: DataTypes.STRING(7),
        allowNull: true
      },
      PR_OKVED: {
        type: DataTypes.STRING(8),
        allowNull: true
      },
      PR_KPP: {
        type: DataTypes.STRING(9),
        allowNull: true
      },
      PR_REGNOPLAT: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      PR_NAME_FULL: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      PR_DIRECTO_DOLZHN: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      PR_SMALL_BUSINESS: {
        type: DataTypes.DECIMAL(1,0),
        allowNull: true
      },
      PR_OGRN: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      PR_STATUS: {
        type: DataTypes.STRING(1),
        allowNull: true
      },
      PR_IPSIRNAME: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      PR_IPNAME: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      PR_IPOTCH: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      PR_IPDOC: {
        type: DataTypes.STRING(250),
        allowNull: true
      },
      PR_OGRIP: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      PR_OKVED_RAZDEL: {
        type: DataTypes.STRING(1),
        allowNull: true
      },
      PR_OKVED_PODRAZDEL: {
        type: DataTypes.STRING(2),
        allowNull: true
      },
      pr_temp: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      PR_RYK_OPOrg: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      PR_BUKH_OPOrg: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      PR_ROPOrg_DovRek: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      PR_BOPOrg_DovRek: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      PR_OKVED_OLD_NAME: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      PR_OKVED_EDIT: {
        type: DataTypes.DECIMAL(1,0),
        allowNull: true
      },
      PR_OKATO_OLD: {
        type: DataTypes.STRING(11),
        allowNull: true
      },
      PR_ARCHIVE: {
        type: DataTypes.DECIMAL(1,0),
        allowNull: true,
        defaultValue: 0
      },
      pr_post_index: {
        type: DataTypes.STRING(6),
        allowNull: true
      },
      pr_post_address: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      PR_EGRUL_NUM: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      PR_EGRUL_DATE: {
        type: DataTypes.DATE(),
        // type: "SMALLDATETIME",
        allowNull: true
      },
      PR_POSTNAL_DATE: {
        type: DataTypes.DATE(),
        // type: "SMALLDATETIME",
        allowNull: true
      },
      PR_GOSREG_DATE: {
        type: DataTypes.DATE(),
        // type: "SMALLDATETIME",
        allowNull: true
      },
      PR_TOV_PROIZV: {
        type: DataTypes.DECIMAL(1,0),
        allowNull: true
      },
      PR_TOV_IMP: {
        type: DataTypes.DECIMAL(1,0),
        allowNull: true
      },
      PR_PLAT_VYVOD: {
        type: DataTypes.DECIMAL(1,0),
        allowNull: true,
        defaultValue: 1
      },
      PR_NAME_KR: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      PR_NAME_KR_ROD: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      PR_NAME_KR_DAT: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      PR_OOOS_DOLZHN: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      PR_EXEC_FOR_DECL: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      PR_FAKT_ADDRESS: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      PR_FAKT_INDEX: {
        type: DataTypes.STRING(6),
        allowNull: true
      },
      PR_OKATO_FAKT: {
        type: DataTypes.STRING(11),
        allowNull: true
      }
    };

    const options = {
      sequelize,
      tableName: 'ALL_PR',
      // schema: 'dbo',
      timestamps: false,
      indexes: [
        {
          name: "PK13",
          unique: true,
          fields: [
            { name: "PR_ID" },
          ]
        },
      ]
    };

    return sequelize.define(
      'ALL_PR',
      attributes,
      options
    )

}