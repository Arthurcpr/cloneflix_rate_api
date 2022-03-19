const rateSchema = require('../entities/rate.entitie')

// Voltar ao q era buscar todos os dados, independende do idUser
const rateGetAll = (req, res) => {
    //const {idUser} = req
    rateSchema.find(/*{idUser},*/ (err, rates) => {
        res.json(rates) 
    })
}
 
// Criar método rategetbyidUser
const rateGetByIdUser = (req, res) => {
    const {idUser} = req
    rateSchema.find({idUser}, (err, rates) => {
        if (err) {
            console.error('[rateGetByIdUser] => err:', err);
            res.status(500).json({message: err.message})
            return ;
        }
        res.json(rates)
    })
}


const rate = (req, res) => {
    const body = req.body
    const rate = new rateSchema({
        idMovie: body.idMovie,
        classification: body.classification,
        createdAt: body.createdAt,
        idUser: body.idUser,
        description: body.description
    })
    rate.save((err, rate) => {
        res.json(rate)
    })
}


module.exports = {
    rate,
    rateGetAll,
    rateGetByIdUser
}
