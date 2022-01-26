const schema = require('../Models/schema')

exports.goog = async (req, res, next) => {
    try{
        res.redirect('http://localhost:3000/');
    }catch(err){
        res.json(err);
    }
}