const medecinModel = require('../models/medecins')

const getMedecin = async (req, res) => {
    try {
        const allmedecins = await medecinModel.findAll({
            include: ["specialiste"] 
        });
        
        if (allmedecins.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Aucun médecin trouvé"
            });
        }

        res.status(200).json({
            success: true,
            message: "Médecins récupérés avec succès",
            data: allmedecins
        });
    } catch (err) {
        console.error("Erreur lors de la récupération des médecins:", err);
        res.status(500).json({
            success: false,
            message: "Erreur lors de la récupération des médecins",
            error: err.message
        });
    }
};


const getOneMedecin =  async (req, res) => {
    try{
        const tofound = await medecinModel.findByPk(req.params.id, {
            include: ["specialiste"]
        })

        if(!tofound){
            res.status(404).json({
                success: false,
                message:"medecins not found "
            })
        }

        res.status(200).json({
            success: true,
            message: "Medecins retrieved successfully",
            data: tofound
        })

    } catch(err){
        res.status(500).json({
            success: false,
            message: "Erreur lors de la recuperation du medecins"
        });
    }
}

const addMedecin = async (req, res) => {
    try {
        console.log("Données reçues:", req.body); 
        const newOne = await medecinModel.create(req.body);
        res.status(200).json({
            success: true,
            message: "Médecin ajouté avec succès",
            medecin: newOne
        });
    } catch (error) {
        console.error("Erreur Sequelize:", error);  
        res.status(500).json({
            success: false,
            message: "Erreur lors de l'ajout d'un médecin",
            error: error.errors ? error.errors.map(err => err.message) : error.message
        });
    }
}
const updateMedecin =  async (req, res) => {
    try{
        console.log("Mise à jour d'un médecin avec les données:", req.body);
        const toUpdate = await medecinModel.findByPk(req.params.id);
        if(!toUpdate){
            return res.status(404).json({
                success: false,
                message: "Le médecin n'existe pas"
            });
        }
        const updatedMedecin = await toUpdate.update(req.body);
        console.log("Médecin mis à jour avec succès:", updatedMedecin);
        res.status(200).json({
            success: true,
            message: "Médecin mis à jour avec succès",
            medecin: updatedMedecin
        });
    } catch(err){
        console.error("Erreur lors de la mise à jour du médecin:", err);
        res.status(500).json({
            success: false,
            message: "Erreur lors de la mise à jour du médecin",
            error: err.message
        });
    }
}

const deletMedecin =  async (req, res) => {
    try{
        const todelete = await medecinModel.findByPk(req.params.id)
        if(!todelete){
            return res.status(404).json({
                success: false,
                message: "Le medecin n existe pas"
            })
        }
    } catch(e){
        res.status(500).json({
            success: false,
            message: "Erreur lors de la suppression de medecin",
            error: e.message
        });
    }
}


module.exports = {
    getMedecin,
    getOneMedecin,
    updateMedecin,
    deletMedecin,
    addMedecin
}
