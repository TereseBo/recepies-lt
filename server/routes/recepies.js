//Dependencies
const express= require('express')
const recepieRouter = express.Router()

//Middleware

//Controllers
const postrecipe = require('../controllers/recipes/postrecipe')
const getrecipes = require('../controllers/recipes/getrecipes')

//Route
recepieRouter.get('/', getrecipes)
recepieRouter.get('/:id', (req, res) => {
    res.send('Return one recepie with id')
})
recepieRouter.post('/', postrecipe)
recepieRouter.put('/:id', async (req, res) => {
    res.send('Peplace a recepie with id')//create index
})
recepieRouter.patch('/:id', (req, res) => {
    res.send('Update a recepie with id')
})


module.exports = recepieRouter