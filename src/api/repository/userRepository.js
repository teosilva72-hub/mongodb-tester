const userModel = require('../model/user');

module.exports =  new class userRepository{

    async createUser(user){
        try{
            console.log(user)
            const db = await userModel.create(user);
        return db;
        }catch(error){
            console.log('error ao salvar dados ::: ', error)
        }
    }
}