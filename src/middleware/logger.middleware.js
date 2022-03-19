const logger = (req, res, next) => {
    console.log(`Requisição realizada em: ${new Date().toLocaleDateString()}`);
    console.log(`Rota chamada ${req.path}`);
    console.log(`Resposta enviada ${res.data}`);
    next()
}

module.exports = logger
