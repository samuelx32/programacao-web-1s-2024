const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const PORT = 8080;

app.listen(PORT, function(){
    console.log("app rodando na porta" + PORT)
})


app.engine ('html',mustacheExpress())
app.set('view engine','html')
app.set('views',__dirname + '/views')

app.use(express.urlencoded({extended: true}));

app.get('/',function(req,res){
    res.render('index.html')
})

app.post('/dados',function(req,res){
    dados = req.body
    res.render('dados.html',{dados})
})