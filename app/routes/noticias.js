module.exports = (app) => {

    //connection = require('../../config/dbConnection');
    app.get('/noticias', function (req, res) {
        app.app.controllers.Noticias.noticias(app, req, res);
    });   
    app.get('/noticia', function(req, res) {
        app.app.controllers.Noticias.noticia(app, req, res);
    });




        //res.render('noticias/noticias');
   
}