const express = require('express');
const router = express.Router();
const {
    getClient,
    deleteClient,
    oneClient,
    addClient,
    updateClient
} = require('../controllers/client-controller')




router.get('/medecin', getClient)

router.get('/medecin/:id', oneClient)

router.post('/add', addClient)

router.put('/update/:id', updateClient)

router.delete('/delete/:id', deleteClient)


module.exports = router