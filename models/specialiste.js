const {DataTypes} = require('sequelize')
const  sequelize  = require('../database/db')


const specialiste = sequelize.define('specialiste', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true,
    },
    nom:{
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = specialiste 