const express = require('express');
// app es como si fuera el servidor
const app = express();
//con el modulo path sabremos si estamos en windows o en linux
//une directorios , independiente di estas en windows o linux,
// soluciona el problema de las barras / y contrabarra \
const path = require('path');

// settings
// establecemos el puerto donde ejecutaremos 
app.set('port', 3000);
// establecemos donde se encuentra la carpeta views
app.set('views', path.join(__dirname, 'views'));

// le decimos que los archivos ejs los render por el motor de 
// plantillas que estamos utilizando ejs
app.engine('html', require('ejs').renderFile);

// especificamos el motor de plantillas que vamos a utilizar, ejs 
// con esto , podemos usar codigo en el archivo html de una manera mas comoda,
// codigo que no seria valildo en un html normal
// no necesitamos requerirlo ya que este viene con express

app.set('view engine','ejs');


//middleawares
//funciones que se ejuecutan antes de que las rutas prececen algo


//routes
// especificamos la ruta donde tenemos el archivo con las rutas
app.use(require('./routes/index'));


//static files
// todos los archivos en esta dirrecion seran accesibles por el navegador

app.use(express.static(path.join(__dirname, 'public')));


// sevidor escuchando
app.listen(3000 , () => {
    // enseña el siguiente mensaje
    console.log('server on port', app.get('port'));

});