const { render } = require('ejs');
const { application } = require('express');
const express = require ('express');
const app = express();
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Cadastroalunos = require('./database/Cadastroalunos')
//database
connection
   .authenticate()
   .then(()=>{
      console.log("conexar feita ocm sucesso ");
   })
   .catch((msgErro)=>{
      console.log(msgErro);
   })
// estou dizendo  pra o express usar  como View engine 
app.set('view engine','ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
 

//rotes
app.get("/", (req, res)=>{
   res.render('index')
  
   

});

app.post("/control",(req, res) => {

   const nomeAluno = req.body.textinput;
   Cadastroalunos.create({
      nome:nomeAluno
   }).then(()=>{
      res.redirect("/");
   })
})


app.listen(8000,()=>{
   console.log('app rodando');

})

