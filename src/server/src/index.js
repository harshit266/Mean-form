const express = require('express')
const routes = require('./api/v1')
const bodyParser = require('body-parser')
const initializedb = require('./db/index')
let app = express()

app.use(bodyParser.json()); // support encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.set('view engine', 'ejs');


initializedb( cb => {
   
    app.get('/',(req,res)=>{
        
        res.status(200).send("Welcome to new project")
    }
    )
    
    routes(app);
    app.listen(4000 ,()=>{
        console.log("server running on port "+ 4000)
    })
})