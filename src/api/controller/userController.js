
module.exports = new class UserController{
    //req = request > requisição
    //res = response > resposta
    async createUser(req, res){
        try{
            const data = req.body
            console.log('>>',data);
            res.status(200).json('JOÃO');
        }catch(error){
            console.log(error)
        }
    }
}