const termsRouter = require('./final/final.routes');
x= (app)=>{
    console.log("initiallizing routes")
   app.use('',termsRouter)  

}
module.exports =x;