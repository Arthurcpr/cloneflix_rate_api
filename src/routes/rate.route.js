const express = require('express')
const route = express.Router()
const rateController = require('../controller/rate.controller')
const jwtmiddleware = require('../middleware/jwt.middleware')


route.post('/rate', [jwtmiddleware.verify], rateController.rate)

// mudar rategetall para rategetbyidUser
route.get('/rate', [jwtmiddleware.verify], rateController.rateGetByIdUser)

// Criar rota /rate/all e chamar rategetall, não autenticada
route.get('/rate/all', rateController.rateGetAll)

module.exports = route

/*
2 - GetAll baseado no id de usuario do token [API Rate] V

Verbo Put, /rate/:rateid
4 - API Rate, fazer um update no registro criado 
*/