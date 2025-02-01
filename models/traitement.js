const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Consultation = require('./consultations'); // Vérifie bien l'import !

const traitement = sequelize.define('traitement', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duree: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    consultation_id: {
        type: DataTypes.INTEGER,
        allowNull: false,  
        references: {
            model: Consultation, 
            key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
});

traitement.belongsTo(Consultation, { foreignKey: 'consultation_id' });

module.exports = traitement;
