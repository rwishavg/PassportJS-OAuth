const schema = require('../Models/schema')

exports.addNewPost = async (req, res, next) => {
    const myName = req.body.data;
    try{
        const newData = new schema(
            {
                Name: myName,
            }
        )
        const saveData = await newData.save()
        console.log("success!")
        res.send("success!");
    }catch(err){
        res.json(err);
    }
}

exports.data = async (req, res, next) => {
    try{
        // console.log(req.user.displayName)
        res.send(req.user);
    }catch(err){
        res.json(err);
    }
}