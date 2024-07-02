const express = require("express");

const app = express();
const PORT = 3000;

app.get('/', function(req,res){
	res.send('{"response":"Respuesta desde inicio"}');
});

app.get('/will', function(req,res){
        res.send('{"response":"Hello Friend"}');
});

app.get('/ready', function(req,res){
        res.send('{"response":"Funcionando ando"}');
});

app.listen(PORT);
module.exports = app;

