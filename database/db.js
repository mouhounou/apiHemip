const {Sequelize} = require('sequelize')

toConnect = () => {
        const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect : process.env.DB_DIALECT,
        logging: false
    })

    sequelize.authenticate()
        .then(() => console.log('✅ Connexion à MySQL réussie !')) 
        .catch(err => console.error('❌ Erreur de connexion à MySQL :', err) );

}

module.exports= toConnect