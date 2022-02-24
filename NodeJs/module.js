//NPM module
// (function(exports, module, require, __dirname, __filename) {

// })();

// const color=require('cli-color');

// (function(name) {
//     let age=26;
//     console.log(name);
// })('Pratap');




// const color=require('cli-color');
// console.log(color.red('Hello Node Js'));

// const register=require('./auth.js');
// register('pratap');

// const auth=require('./auth.js');
// auth.register('pratap');
// auth.login('pratap', '1234');


//Node js code inbuild module

//const path=require('path');
//console.log(__filename);
//dirname
//console.log('Folder name: ', path.dirname(__filename))

//filename
//console.log('File name: ', path.basename(__filename))

//Extention name
//console.log('Extention name: ', path.extname(__filename))

//Parse
//console.log('Parse: ', path.parse(__filename))

//join
//order -> folder name, inside app.js join with current directory
//console.log('Join: ', path.join(__dirname, 'order', 'app.js'))


// //File system
// const fs=require('fs');
// //Make a directory
// fs.mkdir(path.join(__dirname, '/test'), (err)=>{
//     if(err){
//         console.log('Something went worng: ', err);
//         return;
//     }
//     console.log('Floder created');
// })


//Create a file
// const fs=require('fs');
// fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'Hello Node\n', (err)=>{
//     if(err){
//         throw err;
//     }
//     //add new data with exsiting data
//     fs.appendFile(path.join(__dirname, 'test', 'test.txt'), 'More data add', (err)=>{
//         if(err){
//             throw err;
//         }
//         console.log("New data added");
//     })
//     console.log('File created');
// } )


//Read a file
// const fs=require('fs');
// fs.readFile(path.join(__dirname, 'test', 'test.txt'), (err, data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
//     //Binary data to utf-8 data converted
//     const content = Buffer.from(data);
//     console.log(content.toString());
// })

///////////////////////OR/////////////
// const fs=require('fs');
// fs.readFile(path.join(__dirname, 'test', 'test.txt'), 'utf-8', (err, data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
// })


//Operating system module(Used for Server monitoring purpose)
// const os=require('os');
// console.log('OS Type: ', os.type());
// console.log('OS Platfrom: ', os.platform());
// console.log('CPU Architecture: ', os.arch());
// console.log('CPU Details: ', os.cpus());
// console.log('Free Memory in byte: ', os.freemem());
// console.log('Total memory in byte: ', os.totalmem());
// console.log('OS uptime start in sec: ', os.uptime());


//Events module
// const Emitter=require('events');
// const myEmitter=new Emitter();
// myEmitter.on('AnyName', (data)=>{
//     console.log(data);
// })
// myEmitter.emit('AnyName', {
//     name: 'Pratap'
// })


////////OR example in real life ////////////////
const Emitter=require('events');
class Auth extends Emitter{
    register(username){
        console.log('Register successfully');
        //after register successfull
        this.emit('Registered', username);
    }
}
const auth =new Auth();
//Listen
//Verfy email
auth.on('Registered', (data)=>{
    console.log(`Sending email to ${data}`);
})
//Welcome email
auth.on('Registered', (data)=>{
    console.log(`Sending welcome email to ${data}`);
})
auth.register('pratap');


//HTTP module
