//Dependencies
const express= require('express')
const recepieRouter = express.Router()

//Middleware

//Controllers

//Route
recepieRouter.get('/', (req, res) => {
    res.send('Return all recepies')
})
recepieRouter.get('/:id', (req, res) => {
    res.send('Return one recepie with id')
})
recepieRouter.post('/', (req, res) => {
    res.status(201).send('Create a new recepie')
})
recepieRouter.put('/:id', async (req, res) => {
    res.send('Peplace a recepie with id')//create index
})
recepieRouter.patch('/:id', (req, res) => {
    res.send('Update a recepie with id')
})


module.exports = recepieRouter