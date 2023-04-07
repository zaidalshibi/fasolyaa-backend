'use strict';

const { Sequelize, DataTypes } = require( 'sequelize' );
const usersModel = require( './users.model' );

require( 'dotenv' ).config();

const DATABASE_URL = process.env.DATABASE_URL;

const sequelizeOption = {
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // }
};

const sequelize = new Sequelize( DATABASE_URL, sequelizeOption );
const users = usersModel( sequelize, DataTypes );


module.exports = {
    db: sequelize,
    users,
};