const express = require('express');
const router = express.Router();

const {
    getMedecin,
    getOneMedecin,
    updateMedecin,
    deletMedecin,
    addMedecin,
} = require('../controllers/medecin-controller')


router.get('/medecin', getMedecin)

router.get('/medecin/:id', getOneMedecin)

router.post('/new-medecin', addMedecin)

router.put('/update/:id', updateMedecin)

router.delete('/delete/:id', deletMedecin)


module.exports = router
