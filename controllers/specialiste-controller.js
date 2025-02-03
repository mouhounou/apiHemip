const specialisteModel = require('../models/specialiste')


const getSpecialiste = async (req, res) =>{
    try{
        const allSpecialistes = await specialisteModel.findAll()
        res.status(200).json({
            success: true,
            message: 'Specialistes retrieved successfully',
            data: allSpecialistes
        })
    } catch(err){
        res.status(500).json({
            success: false,
            message: "Erreur lors de la recuperation des specialistes",
            error: err.message
        });
    }
}

const getOneSpecialiste = async (req, res) =>{
    try{
        const tofound = await specialisteModel.findByPk(req.params.id)
        if(!tofound){
            return res.status(404).json({
                success: false,
                message: "specialistes not found"
            })
        }

        res.status(200).json({
            success: true,
            message: 'Specialistes retrieved successfully',
            data: tofound
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Erreur lors de la recuperation du specialiste",
            error: err.message
        });
    }
        
}

const addSpecialiste = async (req, res) =>{
    try{
        const newSpecialiste = await specialisteModel.create(req.body)
        if(!newSpecialiste){
            res.status(500).json({
                success: false,
                message: "echec de l enregistrement",
            })
        }

        res.status(200).json({
            success: true,
            message: 'Specialiste added successfully',
            data: newSpecialiste
        })

    }catch(e){
        res.status(500).json({
            success: false,
            message: "Erreur lors de l'enregistrement du specialiste",
            error: e.message
        });
    }
}

const updateSpecialiste = async (req, res) => {
    try {
        const toUpdate = await specialisteModel.findByPk(req.params.id);
        if (!toUpdate) {
            return res.status(404).json({
                success: false,
                message: "Specialiste not found",
            });
        }

        await toUpdate.update(req.body);

        res.status(200).json({
            success: true,
            message: "Specialiste updated successfully",
            data: toUpdate
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: "Erreur lors de la mise à jour du specialiste",
            error: e.message
        });
    }
};


const deleteSpecialiste = async (req, res) =>{
    try{
        const todelete = await specialisteModel.findByPk(req.params.id)

        if(!todelete){
            return res.status(404).json({
                success: false,
                message: "specialiste not found",
            })
        }

        await todelete.destroy()

        res.status(200).json({
            success: true,
            message: "deleted successfully"
        })
    } catch(e){
        res.status(500).json({
            success: false,
            message: "Erreur lors de la suppression du specialiste",
            error: e.message
        });
    }
}

module.exports= {
    getOneSpecialiste,
    getSpecialiste,
    updateSpecialiste,
    deleteSpecialiste,
    addSpecialiste
}