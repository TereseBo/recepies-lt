const {db} = require('../../database/database')

async function postrecipe(req, res) {
    console.log(req.body)
    try{
    const dbRes= await db.recipes.insertOne(req.body)
    console.log(dbRes)
    }catch(err){
        res.status(500).send('Error')
        console.log(err)
    }
    
    res.status(201).send('Create a new recepie')
  }


  module.exports = postrecipe