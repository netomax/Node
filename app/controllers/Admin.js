module.exports.formulario_inclusao_noticia = function(app, req, res) {
    return res.render('admin/form_add_noticia', {errors: false, noticia: false});
}

module.exports.noticias_salvar = function(app, req, res) {
     //console.log(req);
        //res.render('admin/form_add_noticia');
        const noticia = req.body;
        //console.log(noticia);
        //res.send(noticia);
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('noticia', 'Notícia deve conter entre 10 a 100 caracteres').len(10,100);
        req.assert('data_noticia', 'Data é obrigatória').notEmpty();
        //.isDate({format: 'yyyy-mm-dd'});
        req.assert('autor', 'Autor é obrigatório').notEmpty();

        const erros = req.validationErrors();
        //console.log(erros)
        if(!erros) {
            const connection = app.config.dbConnection();
            const noticiasModel = new app.app.models.NoticiasDAO(connection);
    
            noticiasModel.salvarNoticia(noticia, function (error, result) {
                return res.redirect('/noticias');
            });
        }else  return res.render('admin/form_add_noticia', {errors: erros, noticia: noticia});
      
        //conexão
        //model
        //função salvarNoticia
}