const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const client = require('./client');
const medecin = require('./medecins');

const Consultation = sequelize.define('Consultation', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    client_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'clients',  
            key: 'id'
        },
        allowNull: false,
    },
    medecin_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'medecins',  
            key: 'id'
        },
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    motif: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    diagnostique: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Consultation;
