const express = require('express')
const app = express()
const PORT = 8080
const calc = require('./util/crud')

app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
})

app.get('/',function(req,res){
    res.send('página inicial');
})

app.get('/adicionar/:id/:nome/:qtd',function(req,res){
    id = req.params.id
    nome = req.params.nome
    qtd = req.params.qtd

    produtos = calc.cad_produto(id,nome,qtd)
    console.log(produtos)
    res.send(produtos)
})

app.get('/listar',function(req,res){
    produtos = calc.list_produto()
    res.send(produtos);
})

app.get('/deletar/:id',function(req,res){
    id = req.params.id
    p = calc.del_produto(""+id)
    res.send(p);
})

app.get('/editar/:id/:qtd',function(req,res){
    res.send(result);
})