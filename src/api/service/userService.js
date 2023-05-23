const userValidator = require('../validator/userValidator');
const userRepository = require('../repository/userRepository')
module.exports = new class UserService{

    async createUser(user){
        try{
            await userValidator.varifyUser(user);
            const result = await userRepository.createUser(user);
            return result;
        }catch(error){
            return error;
        }
    }
}