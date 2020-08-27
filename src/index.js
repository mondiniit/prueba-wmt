"use strict";
const express = require('express')
const path = require('path');
const app = express()
const mongoose = require('mongoose');
require ('dotenv').config()

const puerto=8080;
const usuario='marco';
const clave='Marko123';
const ruta='/api/v1/productos';

const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('port',process.env.PORT || puerto);
app.set('user',process.env.USER || usuario);
app.set('password',process.env.PASSWORD || clave);
app.set('ruta',process.env.RUTA || ruta);
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.get('ruta'), require('../src/routes/rutas')  )

mongoose
    .connect(`mongodb+srv://mongodb+srv://mondini:mondini@cluster0.gonfv.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      socketTimeoutMS: 5000 
  })
  .then(() => console.log('Mongo Connectado, listo!'))
  .catch(err => {
     console.log('MongoDB Conneccion Error: ${err.message}');
  });  

app.listen(app.get('port'), () => {
  console.log('Servidor en puerto, listo ', app.get('port'));
});

