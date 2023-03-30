const {db} = require('../../database/database')

async function getrecipe(req, res) {
    console.log(req.body)
    try{
    const dbRes= await db.recipes.find({}, { projection: { _id: 0, name: 1, ingredients: 1, comment:1 } }).toArray()
    console.log(dbRes)
    res.status(200).send(dbRes)
    }catch(err){
        res.status(500).send('Error')
        console.log(err)
    }
    
   
  }


  module.exports = getrecipe