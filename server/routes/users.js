//Dependencies
const express= require('express')
const userRouter = express.Router()

//Middleware

//Controllers

//Route

userRouter.get('/', (req, res) => {
    res.send('Return all recepies')
})
userRouter.get('/:id', (req, res) => {
    res.send('Return one recepie with id')
})
userRouter.post('/', (req, res) => {
    res.send('Create a new recepie')
})
userRouter.put('/:id', async (req, res) => {
    res.send('Peplace a recepie with id')//create index
})
userRouter.patch('/:id', (req, res) => {
    res.send('Update a recepie with id')
})


module.exports = userRouter