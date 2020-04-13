let termsController = {}

const terms = require('./final.model')

termsController.createTerm = (req, res) => {
    
 
            const u = new terms();
            u.entity = req.body.entity;
            u.name = req.body.name;
            u.brand = req.body.brand;
            u.email = req.body.email;
            u.year = req.body.year;
            u.principal = req.body.principal;
            u.students = req.body.students;
            u.level = req.body.level;
            u.address = req.body.address;
            u.state = req.body.state;
            u.city = req.body.city;
            u.postcode = req.body.postcode;
            u.number = req.body.number;
           
           
            u.save((err, result) => {
                if (err) {
                    console.log("--", err)
                    return res.status(400).send(err)
                } else {
                    console.log("success terms ")
                }
            });
        
}



module.exports = termsController;