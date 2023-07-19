var express = require('express');
var app = express();
var path=require("path");

app.set('view engine', 'ejs');
app.set('views', __dirname + '/vistas');
//app.set('views', path.join(__dirname, 'vistas'));


var rutas = require('./rutas/rutas');
app.use('/', rutas);

var indexRouter = require('./rutas/rutas');
var productosRouter = require('./rutas/rutas');
var carritoRouter = require('./rutas/rutas');
var registro = require('./rutas/rutas');


app.use('/', indexRouter);
app.use('/', productosRouter);
app.use('/', carritoRouter);
app.use('/', registro);

app.use(express.static(path.join(__dirname + '/web')));

app.use('/', rutas);

var port = 3000;
app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});
