const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../configs/jwt.config')
const jwtConfig = require('../configs/jwt.config')

const verify = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) {
        return res.status(401).json({message: 'Ta faltando token'})
    }   

    jwt.verify(token, jwtSecret, function (err, decoded ){
        if (err) {
            return res.status(500).json({message: 'Deu ruim'})
        }
        req.idUser = decoded.id
        next()
    })
}


module.exports = {
    verify
}
