'use strict';

const jwt = require( 'jsonwebtoken' );
require( 'dotenv' ).config();
const jwtSecret = process.env.JWT_SECRET;

module.exports = ( sequelize, DataTypes ) => {
    const users = sequelize.define( 'users', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            defaultValue: 'other'
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: 'https://unsplash.com/photos/WNoLnJo7tS8'
        },
        token: {
            type: DataTypes.VIRTUAL,
            get () {
                return jwt.sign(
                    { id: this.id, username: this.username },
                    jwtSecret,
                    {
                        expiresIn: 3 * 60 * 60,
                    }
                );
            },
            set ( value ) {
                throw new Error( 'Do not try to set the `token` value!' );
            }
        }
    }
    );
    return users;
};