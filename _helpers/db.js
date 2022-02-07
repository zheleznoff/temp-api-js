const config = require('config');
const { Client } = require('pg')
const { Sequelize } = require('sequelize');
const CryptoJS = require("crypto-js");

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const {secret} = config;
    const { dialect } = config;
    // const decryptedPassword = CryptoJS.AES.decrypt(password, secret).toString(CryptoJS.enc.Utf8)
    // const connection = await new Client({
    //     user: user,
    //     host: host,
    //     database: database,
    //     password: password,
    //     port: port,
    // })
    // await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`, (err, res) => {})

    // connect to db
    const sequelize = new Sequelize(
        database,
        user,
        password,
        {
            host: host,
            port: port,
            dialect: dialect,
            logging: false
        }
    );

    // init models and add them to the exported db object
    db.Factories = require('../factories/factories.model')(sequelize);
    db.Providers = require('../providers/providers.model')(sequelize);

    // sync all models with database
    await sequelize.sync().catch(err => console.log(err));
}