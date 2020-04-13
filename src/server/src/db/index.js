const mongoose = require('mongoose');

console.log("db starting-----")

const connectWithRetry = () => {
    console.log("----->" )
    // return mongoose.connect("mongodb+srv://enhelionuser:enhelionpassword@enhelion-9tax2.mongodb.net/kombo-cash-mean?retryWrites=true&w=majority")
   //return mongoose.connect("mongodb://localhost:27017/node-express-mongodb-server",
  return mongoose.connect("mongodb://localhost:27017/blog")
    	
  //{useNewUrlParser: true});
 }

mongoose.connection.on('connected', () => {
    console.log("mongodb database connected successfully")
})

mongoose.connection.on('error', (error) => {
    console.log("error connecting to the database", error)
    setTimeout(connectWithRetry, 5000)
})



const connect = () => {
    connectWithRetry()
}

database=(callback) => {
    connect()
    callback({
    })

}
module.exports=database