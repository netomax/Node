module.exports.index = function(app, req, res) {
    
    const connection = app.config.dbConnection();
    const noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.get5ultimasnoticias(function(error, result) {
        //console.log(result);
        res.render('home/index', {noticias : result});
    });  
}