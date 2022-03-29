Microsoft Windows [Version 10.0.19044.1586]
(c) Microsoft Corporation. All rights reserved.

C:\Users\MeDev>"C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe"
MongoDB shell version v5.0.6
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("e96b5d01-2163-40e8-8944-f5ffeb16b8cf") }
MongoDB server version: 5.0.6
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
---
The server generated these startup warnings when booting:
        2022-03-29T18:53:41.525+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> show dbs
admin   0.000GB
config  0.000GB
ecom    0.000GB
local   0.000GB
shop    0.000GB
> ^C
bye

C:\Users\MeDev>mongo -version
'mongo' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\MeDev>mongo --version
'mongo' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\MeDev>mongod --version
'mongod' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\MeDev>"C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe" --version
MongoDB shell version v5.0.6
Build Info: {
    "version": "5.0.6",
    "gitVersion": "212a8dbb47f07427dae194a9c75baec1d81d9259",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "windows",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}

C:\Users\MeDev>mongo --version
'mongo' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\MeDev>mongod --version
'mongod' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\MeDev>"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --version
db version v5.0.6
Build Info: {
    "version": "5.0.6",
    "gitVersion": "212a8dbb47f07427dae194a9c75baec1d81d9259",
    "modules": [],
    "allocator": "tcmalloc",
    "environment": {
        "distmod": "windows",
        "distarch": "x86_64",
        "target_arch": "x86_64"
    }
}

C:\Users\MeDev>"C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe"
MongoDB shell version v5.0.6
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("254c15e6-5fa4-4166-8f77-1cb3a54f23f6") }
MongoDB server version: 5.0.6
================
Warning: the "mongo" shell has been superseded by "mongosh",
which delivers improved usability and compatibility.The "mongo" shell has been deprecated and will be removed in
an upcoming release.
For installation instructions, see
https://docs.mongodb.com/mongodb-shell/install/
================
---
The server generated these startup warnings when booting:
        2022-03-29T18:53:41.525+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> show dbs
admin   0.000GB
config  0.000GB
ecom    0.000GB
local   0.000GB
shop    0.000GB
> use devda
switched to db devda
> db.devda.insertOne({name:"ReactJs", type:"Front End", learn day:"30", active: true})
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:60
> db.devda.insertOne({name:"ReactJs", type:"Front End", learnDay:30, active: true})   
{
        "acknowledged" : true,
        "insertedId" : ObjectId("62431838e1aa0f77386d045a")
}


//Create/insert/add


> show dbs
admin   0.000GB
config  0.000GB
devda   0.000GB
ecom    0.000GB
local   0.000GB
shop    0.000GB
> db
devda
> show collections
devda
> db.devda.find()
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
> db.devda.find().pretty()
{
        "_id" : ObjectId("62431838e1aa0f77386d045a"),
        "name" : "ReactJs",
        "type" : "Front End",
        "learnDay" : 30,
        "active" : true
}
> db.devda.insertOne({name:"NodeJs", type: "Back end", LearnDay:50, active: true})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("62431bffe1aa0f77386d045b")
}
> db.devda.find().pretty()
{
        "_id" : ObjectId("62431838e1aa0f77386d045a"),
        "name" : "ReactJs",
        "type" : "Front End",
        "learnDay" : 30,
        "active" : true
}
{
        "_id" : ObjectId("62431bffe1aa0f77386d045b"),
        "name" : "NodeJs",
        "type" : "Back end",
        "LearnDay" : 50,
        "active" : true
} db.devda.insertMany([{name:"Java Script", type: "Web language", LearnDay: 300, active: true},{name: "MongoDB", type: "DataBase", LearnDay: 180, active: true},{name:"Git", type: "GitHub", LearnDay: 30, active:true}])Web language", LearnDay: 300, active: true},{name: "MongoDB", type: "DataBase", LearnDay: 180, active: true},{na}]){
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62431db1e1aa0f77386d045c"),
                ObjectId("62431db1e1aa0f77386d045d"),
                ObjectId("62431db1e1aa0f77386d045e")
        ]
}
> db.devda.find().pretty()
{
        "_id" : ObjectId("62431838e1aa0f77386d045a"),
        "name" : "ReactJs",
        "type" : "Front End",
        "learnDay" : 30,
        "active" : true
}
{
        "_id" : ObjectId("62431bffe1aa0f77386d045b"),
        "name" : "NodeJs",
        "type" : "Back end",
        "LearnDay" : 50,
        "active" : true
}
{
        "_id" : ObjectId("62431db1e1aa0f77386d045c"),
        "name" : "Java Script",
        "type" : "Web language",
        "LearnDay" : 300,
        "active" : true
}
{
        "_id" : ObjectId("62431db1e1aa0f77386d045d"),
        "name" : "MongoDB",
        "type" : "DataBase",
        "LearnDay" : 180,
        "active" : true
}
{
        "_id" : ObjectId("62431db1e1aa0f77386d045e"),
        "name" : "Git",
        "type" : "GitHub",
        "LearnDay" : 30,
        "active" : true
}
> db.devda.find()         
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045e"), "name" : "Git", "type" : "GitHub", "LearnDay" : 30, "active" : true }




//Find/read

> show dbs
admin   0.000GB
config  0.000GB
devda   0.000GB
ecom    0.000GB
local   0.000GB
shop    0.000GB
> db
devda
> show collections
devda
> db.devda.find()
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045e"), "name" : "Git", "type" : "GitHub", "LearnDay" : 30, "active" : true }
> db.devda.find().pretty()
{
        "_id" : ObjectId("62431838e1aa0f77386d045a"),
        "name" : "ReactJs",
        "type" : "Front End",
        "learnDay" : 30,
        "active" : true
}
{
        "_id" : ObjectId("62431bffe1aa0f77386d045b"),
        "name" : "NodeJs",
        "type" : "Back end",
        "LearnDay" : 50,
        "active" : true
}
{
        "_id" : ObjectId("62431db1e1aa0f77386d045c"),
        "name" : "Java Script",
        "type" : "Web language",
        "LearnDay" : 300,
        "active" : true
}
{
        "_id" : ObjectId("62431db1e1aa0f77386d045d"),
        "name" : "MongoDB",
        "type" : "DataBase",
        "LearnDay" : 180,
        "active" : true
}
{
        "_id" : ObjectId("62431db1e1aa0f77386d045e"),
        "name" : "Git",
        "type" : "GitHub",
        "LearnDay" : 30,
        "active" : true
}
> db.devda.find({name: "Mongodb"})
> db.devda.find({name: "MongoDB"})
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
> db.devda.find({name: "MongoDB"}).pretty()
{
        "_id" : ObjectId("62431db1e1aa0f77386d045d"),
        "name" : "MongoDB",
        "type" : "DataBase",
        "LearnDay" : 180,
        "active" : true
}
> db.devda.find({name: "MongoDB"}, {name:1}).pretty()
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB" }
> db.devda.find({name: "MongoDB"}, {name:1})         
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB" }
> db.devda.find({active: true})             
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045e"), "name" : "Git", "type" : "GitHub", "LearnDay" : 30, "active" : true }
> db.devda.find({active: true}).limit(1)
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
> db.devda.find({active: true}).limit(3)
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
> db.devda.find({active: true}).limit(4)
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
> db.devda.findOne({active: true})      
{
        "_id" : ObjectId("62431838e1aa0f77386d045a"),
        "name" : "ReactJs",
        "type" : "Front End",
        "learnDay" : 30,
        "active" : true
}
> db.devda.findFour({active: true})
uncaught exception: TypeError: db.devda.findFour is not a function :
@(shell):1:1
> db.devda.findtwo({active: true}) 
uncaught exception: TypeError: db.devda.findtwo is not a function :
@(shell):1:1
> db.devda.findFifth({active: true})
uncaught exception: TypeError: db.devda.findFifth is not a function :
@(shell):1:1
> db.devda.find({active: true}).limit(1).skip(1)
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
> db.devda.find({active: true}).limit(1).skip(2)
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
> db.devda.find({active: true}).skip(1)         
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045e"), "name" : "Git", "type" : "GitHub", "LearnDay" : 30, "active" : true }
> db.devda.find()                               
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045e"), "name" : "Git", "type" : "GitHub", "LearnDay" : 30, "active" : true }
> db.devda.find().skip(2)
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045e"), "name" : "Git", "type" : "GitHub", "LearnDay" : 30, "active" : true }
> db.devda.find()        
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045e"), "name" : "Git", "type" : "GitHub", "LearnDay" : 30, "active" : true }
> db.devda.find().limit(1).skip(1)              
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }


//Update
> show dbs
admin   0.000GB
config  0.000GB
devda   0.000GB
ecom    0.000GB
local   0.000GB
shop    0.000GB
> db
devda
> show collections
devda
> db.devda.find()
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045e"), "name" : "Git", "type" : "GitHub", "LearnDay" : 30, "active" : true }
> db.devda.updateOne({name: "JavaScript"}, {$set:{type:"Full Stack"}})
{ "acknowledged" : true, "matchedCount" : 0, "modifiedCount" : 0 }
> db.devda.find()
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Web language", "LearnDay" : 300, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045e"), "name" : "Git", "type" : "GitHub", "LearnDay" : 30, "active" : true }
> db.devda.updateOne({name: "Java Script"}, {$set:{type:"Full Stack"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
> db.devda.find()
{ "_id" : ObjectId("62431838e1aa0f77386d045a"), "name" : "ReactJs", "type" : "Front End", "learnDay" : 30, "active" : true }
{ "_id" : ObjectId("62431bffe1aa0f77386d045b"), "name" : "NodeJs", "type" : "Back end", "LearnDay" : 50, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045c"), "name" : "Java Script", "type" : "Full Stack", "LearnDay" : 300, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045d"), "name" : "MongoDB", "type" : "DataBase", "LearnDay" : 180, "active" : true }
{ "_id" : ObjectId("62431db1e1aa0f77386d045e"), "name" : "Git", "type" : "GitHub", "LearnDay" : 30, "active" : true }
>  
