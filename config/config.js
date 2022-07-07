// Load environment variable from .env file
const { Sequelize } = require('sequelize');
require('dotenv').config();

//**CONNEXION A LA BASE DE DONNEES MYSQL**//
module.exports = {
  production: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.TEST_DB_NAME, process.env.TEST_DB_USERNAME, process.env.TEST_DB_PASSWORD, {
  host: process.env.TEST_DB_HOST,
  dialect: 'mysql' 
});
try {
  sequelize.authenticate();
  console.log('Connecté au serveur MySql.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
