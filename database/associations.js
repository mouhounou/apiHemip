const Client = require('../models/client');
const Medecin = require('../models/medecins');
const Traitement = require('../models/traitement');
const Consultation = require('../models/consultations');
const Specialiste = require('../models/specialiste');

// Un médecin appartient à un spécialiste
Medecin.belongsTo(Specialiste, { foreignKey: 'specialiste_id', onDelete: 'CASCADE' });

// Une consultation appartient à un client
Consultation.belongsTo(Client, { foreignKey: 'client_id', onDelete: 'CASCADE' });

// Un traitement appartient à une consultation
Traitement.belongsTo(Consultation, { foreignKey: 'consultation_id', onDelete: 'CASCADE' });

module.exports = { Client, Medecin, Traitement, Consultation, Specialiste };
