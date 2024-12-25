//console.log('criando um site de notícias com o nodeJS')

const http = require('http')


const server = http.createServer(function(req, res) {

    const categoria = req.url
    if(categoria == '/tecnologia'){
        res.end("<html><body>notícias de tecnologia</body></html>")
    }else if(categoria == '/moda') {
        res.end("<html><body>notícias de moda</body></html>")
    }else res.end("<html><body>Portal de notícias agora</body></html>")
})
console.log('Escutando na porta 3000...')
server.listen(3000)