const clientModel = require('../models/client')


const getClient = async(req, res) =>{

    try {
        const clients = await clientModel.findAll(); 
        res.json({
            success: true,
            message: "Clients retrieved successfully",
            data: clients
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrieving clients",
            error: error.message
        });
    }
}

const oneClient = async(req, res) =>{
    try{
        const tofound = req.params.id
        const clientTofound = await clientModel.findByPk(tofound)
        if(clientTofound) {
            res.status(200).json({
                success: true,
                message: 'Client retrieved successfully',
                data: clientTofound
            });
        }else{
            res.status(404).json({
                success: false,
                message: 'Client not found'
            });
        }
    } catch(error){
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        res.status(500).json({
            success: false,
            message: 'Error retrieving client',
            error: error
        });
    }
}



const addClient = async(req, res) =>{
    try{
        const newClient = await clientModel.create(req.body);
    
        if(newClient) {
            res.status(201).json({
                success: true,
                message: 'Client created successfully',
                data: newClient
            });
        }else{
            res.status(500).json({
                success: false,
                message: 'Error creating client'
            });
        }
    }catch(error){
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        res.status(500).json({
            success: false,
            message: 'Error creating client',
            error: error
        });
    }
}

const deleteClient = async(req, res) =>{
    try{
        const todelete= await clientModel.findByPk(req.params.id)
        if(!todelete) {
            res.status(404).json({
                success: false,
                message: 'Client not found'
            });
        }

        await todelete.destroy()
        res.status(200).json({
            success: true,
            message: 'Client deleted successfully',
            client: todelete
        });
    } catch(err){
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        res.status(500).json({
            success: false,
            message: 'Error deleting client',
            error: err
        });
    }
}

const updateClient = async(req, res) =>{
    try{
        const toupdate = await clientModel.findByPk(req.params.id)
        if(!toupdate) {
            res.status(404).json({
                success: false,
                message: 'Client not found'
            });
        }
        await toupdate.update(req.body)
        res.status(200).json({
            success: true,
            message: 'Client updated successfully',
            data: toupdate
        });
        
    } catch(error){
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        res.status(500).json({
            success: false,
            message: 'Error updating client',
            error: error
        });
    }
}


module.exports = {
    getClient,
    oneClient,
    deleteClient,
    updateClient,
    addClient
}
