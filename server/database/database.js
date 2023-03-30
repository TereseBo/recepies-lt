const { MongoClient } = require("mongodb")

//require('dotenv').config()
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.57c8rxn.mongodb.net/?retryWrites=true&w=majority`

db = { users: undefined, recipes: undefined, ingredients: undefined }

MongoClient.connect(url)
    .then((client) => {
        db.users = client.db(process.env.DB_NAME).collection('users')
        db.recipes = client.db(process.env.DB_NAME).collection('recipes')
        db.ingredients = client.db(process.env.DB_NAME).collection('ingredients')
        //db.friends=client.db(process.env.DB_NAME).collection('friends')
        console.log("Connected to database")
    })

exports.db = db
//Objectet är undefined tills det att databasen har svarat. database.js
