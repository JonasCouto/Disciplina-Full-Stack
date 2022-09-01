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

app.use(express.json());

// create/insert produtos
app.post('/produtos', function (req, res){
  const {id, nome, preco} = req.body;
  console.log(req.body);
  const produto = {
    "id":  id,
    "nome": nome,
    "preco": preco
  }
  produtos.push(produto)
  return res.send("Acessando API metodo POST")
})

// Leitura "READ" de produtos OK
app.get('/produtos', function (req, res){
  res.json(produtos);
})

// Leitura por Id "READ" de produtos OK
app.get('/produtos/:id', function (req, res){
  const id = req.params.id;
  for (const produto of produtos){
    // console.log(produto);
    if(produto.id == id){
      res.json(produto);  
    } 
  }
  res.status(404).json({"msg":"Produto nao encontrado"})
})

// Atualizar produto OK
app.put('/produtos/:id', function(req, res){
  const id = req.params.id;
  const {nome, preco} = req.body
  // atualizando objeto
  const produto = {
    id,
    nome, 
    preco
  }
  // pegando o indice
  const index = produtos.findIndex(produto => produto.id == id);

  produtos[index] = produto;

  return res.send("Atualizado com sucesso  ")
})


// Deletar produto. OK
app.delete('/produtos/:id', function (req, res) {
  // pegando o ID como parametro
  const id = req.params.id;
  const index = produtos.findIndex(produto => produto.id == id);
  produtos.splice(index, 1);
  
  return res.status(204).send( "Produto deletado com sucesso ")
})

// instanciando o servidor localhost
app.listen(8081, () => {
  
    console.log('Servidor rodando na porta 8081')
})