const db = {}
const { Sequelize, Op, QueryTypes } = require('sequelize');
const connection = new Sequelize('test1', 'sa', '123', {
    host: 'localhost',
    dialect: 'mssql',
    charset: 'utf8',
    collate: 'utf8_persian_ci',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: true,
        freezeTableName: true,
        underscored: false,
        timestamps:false
    },
    dialectOptions: {
        useUTC: true, //for reading from database
        dateStrings: true,
    },
});
db.Sequelize = Sequelize
db.QueryTypes = QueryTypes
db.connection = connection
db.Op = Op

db.Users = require('./users.model')(connection, Sequelize)

module.exports = db
