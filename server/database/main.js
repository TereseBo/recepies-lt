
const {MongoClient}=require("mongodb")

require('dotenv').config()


async function main(){
    const url= `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.57c8rxn.mongodb.net/?retryWrites=true&w=majority`
const connection=await MongoClient.connect(url)

const database=connection.db(process.env.DB_NAME)

const userscollection=database.collection("users")

const documents=await userscollection.find().toArray()
//const hit=await userscollection.findOne({username:"test"},{projection:{password:1, _id:0}})
const hit=await userscollection.find({},{projection:{password:1, _id:0}}).toArray()

//const res= await userscollection.insertOne({username:"test",password:"test",age:20})
//console.log(res)

//users.insert([{},{},{}])

console.log(hit)
}

main()
//addOne()