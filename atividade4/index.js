const express = require('express')
const app = express()
const PORT = 8080
const calc = require('./util/calculadora')

app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
})

app.get('/',function(req,res){
    res.send('página inicial');
})

app.get('/soma/:a/:b',function(req,res){
    let a1 = parseFloat(req.params.a);
    let b1 = parseFloat(req.params.b);
    let result = "Resultado: " + calc.soma(a1,b1)
    res.send(result);
})

app.get('/subtracao/:a/:b',function(req,res){
    let a1 = parseFloat(req.params.a);
    let b1 = parseFloat(req.params.b);
    let result = "Resultado: " + calc.subtracao(a1,b1)
    res.send(result);
})

app.get('/multiplicacao/:a/:b',function(req,res){
    let a1 = parseFloat(req.params.a);
    let b1 = parseFloat(req.params.b);
    let result = "Resultado: " + calc.multiplicacao(a1,b1)
    res.send(result);
})

app.get('/divisao/:a/:b',function(req,res){
    let a1 = parseFloat(req.params.a);
    let b1 = parseFloat(req.params.b);
    let result = "Resultado: " + calc.divisao(a1,b1)
    res.send(result);
})



