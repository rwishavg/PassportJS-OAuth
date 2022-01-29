exports.goog = async (req, res, next) => {
    try{
        // console.log(req)
        res.redirect('/');
    }catch(err){
        res.json(err);
    }
}