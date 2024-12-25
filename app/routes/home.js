module.exports = (app) => {
    app.get('/', (req, res) => {
        //console.log(req);
        app.app.controllers.Home.index(app, req, res);
    });
}