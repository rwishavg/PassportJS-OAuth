exports.goog = async (req, res, next) => {
    try{
        // console.log(req)
        res.redirect('http://localhost:3000/');
    }catch(err){
        res.json(err);
    }
}