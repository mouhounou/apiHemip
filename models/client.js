const {DataTypes} = require('sequelize')
const  sequelize  = require('../database/db')

const client = sequelize.define('client', {
    id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
    nom:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    prenom:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_naissance:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    adresse:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    quartier:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },

})

module.exports = client 