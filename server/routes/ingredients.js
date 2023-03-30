//Dependencies
const express= require('express')
const ingredientsRouter = express.Router()

//Middleware

//Controllers

//Route
ingredientsRouter.get('/', (req, res) => {
    res.send('Return all recepies')
})
ingredientsRouter.get('/:id', (req, res) => {
    res.send('Return one recepie with id')
})
ingredientsRouter.post('/', (req, res) => {
    res.send('Create a new recepie')
})
ingredientsRouter.put('/:id', async (req, res) => {
    res.send('Peplace a recepie with id')//create index
})
ingredientsRouter.patch('/:id', (req, res) => {
    res.send('Update a recepie with id')
})


module.exports = ingredientsRouter