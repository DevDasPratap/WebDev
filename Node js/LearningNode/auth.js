const register=function(username){
    console.log(`User ${username} has been registered`);
}
// module.exports=register;
const login=function(username, password){
    console.log(`User ${username} is logged in`)
}
module.exports={
    register: register,
    login: login
}
