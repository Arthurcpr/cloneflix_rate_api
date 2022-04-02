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


const updateRate = (req, res) => {
    const {id} = req.params
    const {classification, description} = req.body

    if (!classification && !description) {
        res.status(400).json({message: 'Classification or description need to be provided'})
        return ;
    }

    rateSchema.findOne({id}, (err, rate) => {
        if (err) {
            console.error('[updateRate] => err:', err);
            res.status(500).json({message: err.message})
            return ;
        }
        let cloneRate = rate;
        cloneRate.classification = classification ? classification : rate.classification
        cloneRate.description = description ? description : rate.description
        cloneRate.updateAt = new Date().toDateString()
        rateSchema.updateOne({id}, cloneRate, {} ,(err, data) => {
        console.log('oi')
            if (err){
                console.error('[cloneRateUpdateOne] => err:', err)
                res.status(500).json({message: err.message})
                return ; 
            }
            res.status(200).end()
            return ; 
        }) 
    })
}
/*
olhar na documentação ofc. do mongoose como fazer um update, através de um campo

Estudar es6
*/


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
    rateGetByIdUser,
    updateRate
}
