const  Sequelize  = require('sequelize');

const connection = new Sequelize ({
   username: 'root',
   password:'123456',
   database:'cadastroalunos',
   host:'localhost',
   dialect:'mysql'

});
module.exports= connection;