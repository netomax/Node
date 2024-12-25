const app = require('./config/server');

//require('./app/routes/noticias')(app);
//require('./app/routes/home')(app);
//require('./app/routes/formulario_inclusao_noticias')(app);


app.listen(3000, () => {
    console.log('escutando na porta 3000 com Express http://localhost:3000');
});