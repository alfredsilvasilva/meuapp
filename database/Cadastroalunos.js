const sequelize = require('sequelize')
const connection = require('./database')

// estrutura do Model
const Cadastroalunos = connection.define('cadastroalunos',{
    nome:{
        type:sequelize.STRING,
        allowNull:false
    }
 
})
module.exports = Cadastroalunos;
Cadastroalunos.sync({force:false}).then(()=>{}); //  sincroniza  com o banco de dados