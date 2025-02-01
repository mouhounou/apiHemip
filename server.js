require('dotenv').config()
const express = require('express')
const app = express()
const clientRoute = require('./routes/client-route')
const consultationRoute = require('./routes/consultations-route')
const medecinRoute = require('./routes/medecins-routes')
const specialistesRoute = require('./routes/specialiste-routes')
const traitementRoute = require('./routes/traitement-routes')
const toconnect = require('./database/db')
const port = process.env.PORT || 4000
const { Client, Medecin, Traitement, Consultation, Specialiste } = require('./database/associations');


const sequelize = require('./database/db');

// Synchroniser la base de données
sequelize.sync({ alter: true }) 
    .then(() => console.log("✅ Base de données synchronisée"))
    .catch(err => console.error("❌ Erreur de synchronisation:", err));


// middleware 
app.use(express.json())
app.use('/api/clients', clientRoute)
app.use('/api/consultations', consultationRoute)
app.use('/api/doctors', medecinRoute)
app.use('/api/specialistes', specialistesRoute)
app.use('/api/traitements', traitementRoute)



app.listen(port, () =>{
    console.log('====================================');
    console.log(`Server is running on port http://localhost:${port}`)
    console.log('====================================');
})
