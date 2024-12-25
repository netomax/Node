module.exports = (app) => {
    app.get('/formulario_inclusao_noticia', (req, res) => {
        //console.log(req);
        app.app.controllers.Admin.formulario_inclusao_noticia(app, req, res);
    });

    app.post('/noticias/salvar', (req, res) => {
        app.app.controllers.Admin.noticias_salvar(app, req, res);
    });
}