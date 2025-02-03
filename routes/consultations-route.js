const express = require('express');
const router = express.Router();

const {
    getConsultation,
    getOneConsultation,
    updateConsultation,
    deleteConsultation,
    addConsultation
} = require('../controllers/consultation-controller')


router.get('/consultation', getConsultation)

router.get('/consultation/:id', getOneConsultation)

router.post('/newconsultation', addConsultation)

router.put('/update-consultation', updateConsultation)

router.delete('/delete-consultation', deleteConsultation)


module.exports = router