var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('inicio');
});


router.get('/productos', (req, res) => {
  res.render('productos');
});


router.get('/carrito', (req, res) => {
  res.render('carrito');
});

router.get('/login',(req, res)=>{
  res.render("login");
});


router.get('/registro',(req, res)=>{
  res.render("registro");
});

router.get("/quienessomos",(req, res)=>{
  res.render("quienessomos");
});



module.exports = router;
