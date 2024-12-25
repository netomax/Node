const mysql = require('mysql');

const connMysql = () => {
    console.log('conexao estabelecida com bd');
    return mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'portal_noticias',
        //insecureAuth: true

    });
}



module.exports = () => {
    console.log('O autoload carregou o módeulo de coanexão com bd');
    return connMysql;
}