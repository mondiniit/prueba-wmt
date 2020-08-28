const { Router } = require('express')
const router = Router()

const  RunController = require('../components/controllers/productos.controllers')

arreglo=[]

router.route('/busqueda')
  .get(async function(req, res) {
    arreglo = await RunController.executeTransfer(req,res)
    res.render('index', { title: req.query.title });
  })

module.exports= router