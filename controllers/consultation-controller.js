const consultationModel = require('../models/consultations')
const Client = require('../models/client')
const Medecin = require('../models/medecins')

const getConsultation = async (req, res) => {
    
    try{
        const consultation = await consultationModel.findAll({
            include: [
                    {
                        model: Client,  
                        required: true  
                    },
                    {
                        model: Medecin,  
                        required: true
                    }
            ]
        });
        
        if(!consultation){
            return res.status(404).json({
                success: false,
                message: "Consultation not found"
            });
        } else{
            return res.status(200).json({
                success: true,
                message: "Consultations retrieved successfully",
                data: consultation
            });
        }

    } catch(error){
        res.status(500).json({
            success: false,
            message: "Error retrieving consultation",
            error: error.message
        });
    }
}


const getOneConsultation = async (req, res) => {
    try{

        const tofound = req.params.id
        const checkConsultation = await consultationModel.findByPk(tofound,{
            include: [
                {
                    model: Client,  
                    required: true  
                },
                {
                    model: Medecin,  
                    required: true
                }
        ]
        })

        if(!checkConsultation){
            return res.status(404).json({
                success: false,
                message: 'consultation not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'consultation retrieved successfully',
            data: checkConsultation
        });
    }catch(error){
        console.log('================= consultation ===================');
        console.log(error);
        console.log('====================================');
        res.status(500).json({
            success: false,
            message: 'Erreur lors de la recuperation de la consultation',
            error: error
        });
    }
}

const addConsultation = async (req, res) => {
    try{
        const newConsultation = await consultationModel.create(req.body)
        if(!newConsultation){
            return res.status(500).json({
                success: false,
                message: 'Erreur lors de l enregistrement  de la consultation',
            });
        }
        res.status(201).json({
            success: true,
            message: 'consultation created successfully',
            data: newConsultation
        });

    } catch(error){
        console.log('================= consultation ===================');
        console.log(error);
        console.log('=================================================');
        res.status(500).json({
            success: false,
            message: 'Erreur lors de l enregistrement  de la consultation',
            error: error
        });
    }
}

const updateConsultation = async (req, res) => {}

const deleteConsultation = async (req, res) => {
    try{
        const todelete = await consultationModel.findByPk(req.params.id, {
            include: ["medecins","client"]
        })

        if(!todelete){
            res.status(404).json({
                success: false,
                message: 'consultation not found'
            });
        }

        await todelete.destroy()
        res.status(200).json({
            success: true,
            message: 'consultation deleted successfully',
        });

    }catch(e){
        console.log('====================================');
        console.log(e);
        console.log('====================================');
        res.status(500).json({
            success: false,
            message: 'Erreur lors de la suppression ',
            error: e
        });
    }
}


module.exports = {
    getConsultation,
    getOneConsultation,
    updateConsultation,
    deleteConsultation,
    addConsultation
}