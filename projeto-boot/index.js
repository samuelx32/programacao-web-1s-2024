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

app.get('/',function(req,res){
    let nome = 'satan'
    res.render('index.html',{nome})
})

app.get('/contato',function(req,res){
    res.render('contato.html')
})