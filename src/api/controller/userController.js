const userService = require('../service/userService');
const UserService = require('../service/userService');
module.exports = new class UserController{
    //req = request > requisição
    //res = response > resposta
    async createUser(req, res){
        try{
            const retorno = await userService.createUser(req.body);
            res.status(200).json(retorno);
        }catch(error){
            console.log(error)
        }
    }
}