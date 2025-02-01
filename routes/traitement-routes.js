const express = require('express');
const router = express.Router();

const {
    getOneTraitement,
    getTraitement,
    updateTraitement,
    deleteTraitement,
    addTraitement
} = require('../controllers/traitement-controller')


router.get('/traitement', getTraitement)

router.get('/traitement/:id', getOneTraitement)

router.post('/add', addTraitement)

router.put('/update', updateTraitement)

router.delete('/remove/:id', deleteTraitement)


module.exports = router