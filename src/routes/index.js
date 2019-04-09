const express = require('express');
const router = express.Router();

//routers
//cuando se ejecuta la raiz de la carpeta , la ruta inicial
//respondemos con un archivo , con la ruta especificada
// index
router.get('/', (req,res) => {
    res.render('index.html' , {title: 'DEZZ'});
});

// contact page
router.get('/contact', (req,res) => {
    res.render('contact.html' , {title: 'contact page'});
});



module.exports = router;