const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Specialiste = require('./specialiste'); 

const Medecin = sequelize.define('medecin', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    specialiste_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Specialiste, 
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
});

module.exports = Medecin;
