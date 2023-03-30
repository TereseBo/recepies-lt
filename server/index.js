//Dependencies
const express=require('express');
const server=express();
const dotenv=require('dotenv').config();
const cors=require('cors');

//Middleware
server.use(cookieparser());
server.use(cors(
    {
        origin: 'http://localhost:5500',
        credentials: true
    }
))
server.use(express.json());

//Routes
const recepiesRouter=require('./routes/recepies');
const ingredientsRouter=require('./routes/ingredients');
const usersRouter=require('./routes/users');    

//Server
server.use('/recepies', recepiesRouter);
server.use('/ingredients', ingredientsRouter);
server.use('/users', usersRouter);

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

