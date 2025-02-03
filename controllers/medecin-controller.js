const medecinModel = require('../models/medecins')


const getMedecin =  async (req, res) => {
    try{
        const allmedecins = await medecinModel.findAll()
        res.status(200).json({
            success: true,
            message: "medecins retrieved successfully",
            data: allmedecins
        });
    } catch(err){
        res.status(500).json({
            success: false,
            message: "Erreur lors de la recuperation des medecins"
        });
    }
}


const getOneMedecin =  async (req, res) => {
    try{
        const tofound = await medecinModel.findByPk(req.params.id, {
            include: "specialistes"
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

const addMedecin =  async (req, res) => {
    try{
        const newOne = await medecinModel.create(req.body)
        res.status(200).json({
            success: false,
            message: "Medecins added successfully",
            medecin: newOne
        })
    } catch(e){
        res.status(500).json({
            success: false,
            message: "Erreur lors de l'ajout d'un medecin",
            error: error.message
        });
    }
}

const updateMedecin =  async (req, res) => {}

const deletMedecin =  async (req, res) => {
    try{
        const todelete = await medecinModel.findByPk(req.params.id)
        if(!todelete){
            res.status(404).json({
                success: false,
                message: "Le medecin n existe pas"
            })
        }
    } catch(e){
        res.status(500).json({
            success: false,
            message: "Erreur lors de la suppression de medecin",
            error: error.message
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
