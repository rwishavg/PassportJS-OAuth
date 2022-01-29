exports.goog = async (req, res, next) => {
    try{
        // console.log(req)
        res.redirect('/');
        // res.redirect('/dashboard');
    }catch(err){
        res.json(err);
    }
}