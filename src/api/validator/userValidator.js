module.exports = new class userValidator{

    async varifyUser(user){
        if(user.name == undefined || user.name.trim() == '') throw '*campo nome é obrigatório!';
        else if(user.email == undefined || user.email.trim() == '') throw '*campo email é obrigatório!';
        return true;
    }
}