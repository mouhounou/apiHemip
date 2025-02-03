const express = require('express');
const router = express.Router();

const {
    getSpecialiste,
    getOneSpecialiste,
    addSpecialiste,
    updateSpecialiste,
    deleteSpecialiste
    
} = require('../controllers/specialiste-controller')


router.get('/specialiste', getSpecialiste)

router.get('/specialiste/:id', getOneSpecialiste)

router.post('/add/', addSpecialiste)

router.put('/update/:id', updateSpecialiste)

router.delete('/delete/:id', deleteSpecialiste)

module.exports = router