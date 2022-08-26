const express = require('express')
const app = express()
// const usuarios = require('./controllers/usuario')

const produtos = [  
     { 
        id:1,
        nome:'Playstation 5',
        preco: 4880
        
     },

     { 
       id:2,
       nome:'Iphone',
       preco: 5700
      

     },

     { 
       id: 3,
       nome:'Cadeira gammer',
       preco: 1089
      

     }
]



app.get('/', function (req, res) {
  res.send('Hello World')
})

// Leitura "READ" de produtos
app.get('/produtos', function (req, res){
  res.json(produtos);
})


// Pesquisar por Id "READ" de produtos
app.get('/produtos/:id', function (req, res){
  const id = req.params.id;
  for (const produto of produtos){
    // console.log(produto);
    if(produto.id == id){
      res.json(produto);  
    } 
  }
})





// instanciando o servidor localhost
app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081')
})