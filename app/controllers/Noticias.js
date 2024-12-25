module.exports.noticias = function(app, req, res) {
    //console.log(req);

    const connection = app.config.dbConnection();

    const noticiasModel = new app.app.models.NoticiasDAO(connection);


    noticiasModel.getNoticias( function (error, result) {
        //console.log(result);
        //console.log('Conexao')
        //res.send(error);
        //res.send(result);
        res.render('noticias/noticias', { noticias: result });
    });
}

module.exports.noticia = function(app, req, res) {
    //console.log(req);
        
       const connection = app.config.dbConnection();
       const noticiasModel = new app.app.models.NoticiasDAO(connection);
       const id_noticia = req.query;
       noticiasModel.getNoticia(id_noticia, function (error, result) {
            //console.log(result);
            //console.log('Conexao')
            //res.send(error);
            //res.send(result);
            // console.log(req.query);
           
            res.render('noticias/noticia', {noticia: result});
        });

        //res.render('noticias/noticias');
}