Microsoft Windows [Version 10.0.19044.1526]
(c) Microsoft Corporation. All rights reserved.

C:\Users\MeDev\OneDrive\Desktop\DevDas\MERN>md mongoDB

C:\Users\MeDev\OneDrive\Desktop\DevDas\MERN>dir
 Volume in drive C is OS
 Volume Serial Number is 5CC4-1A5A

 Directory of C:\Users\MeDev\OneDrive\Desktop\DevDas\MERN

03/08/2022  10:27 AM    <DIR>          .
03/08/2022  10:27 AM    <DIR>          ..
03/08/2022  01:17 AM    <DIR>          ExpressJs
03/08/2022  10:27 AM    <DIR>          mongoDB
03/05/2022  01:51 PM    <DIR>          NodeJs
               0 File(s)              0 bytes
               5 Dir(s)  141,627,080,704 bytes free      

C:\Users\MeDev\OneDrive\Desktop\DevDas\MERN>cd mongodb

C:\Users\MeDev\OneDrive\Desktop\DevDas\MERN\mongoDB>C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe
'C:\Program' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\MeDev\OneDrive\Desktop\DevDas\MERN\mongoDB>C:\Program Files\MongoDB\Server\5.0\bin mongo.exe
'C:\Program' is not recognized as an internal or external command,
operable program or batch file.

C:\Users\MeDev\OneDrive\Desktop\DevDas\MERN\mongoDB>"C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe"
MongoDB shell version v5.0.6
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("6984f9a8-417c-4783-9c8d-3126e8ea18db") }
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
        2022-02-27T01:50:54.157+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
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

 > use shop
switched to db shop

 > show collections

 > db.createCollection('products')
{ "ok" : 1 }

 > show collections
products

 > db.createCollection('users')
{ "ok" : 1 }

 > show collections
products
users

 > db.products.insertOne({name: 'keybord', price: 250})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("6226ea64e3048a1ec408e51a")
}

 > db.products.find()
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
> db.products.insertOne({name: 'monitor', price: 2500})
{
        "acknowledged" : true,
        "insertedId" : ObjectId("6226eab3e3048a1ec408e51b")
}

 > db.products.find()
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
{ "_id" : ObjectId("6226eab3e3048a1ec408e51b"), "name" : "monitor", "price" : 2500 }
> db.products.insertOne({name: 'mouse', price: 300})   
{
        "acknowledged" : true,
        "insertedId" : ObjectId("6226eacde3048a1ec408e51c")
}

 > db.products.find()
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
{ "_id" : ObjectId("6226eab3e3048a1ec408e51b"), "name" : "monitor", "price" : 2500 }
{ "_id" : ObjectId("6226eacde3048a1ec408e51c"), "name" : "mouse", "price" : 300 }
> db.products.find({price: 250})
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }

 > db.products.findOne({price: 250})
{
        "_id" : ObjectId("6226ea64e3048a1ec408e51a"),
        "name" : "keybord",
        "price" : 250
}

 > db.products.insertMany([{name: 'computer table', price: 500},{name: 'PenDrive', price: 400}]) 
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6226ec40e3048a1ec408e51d"),
                ObjectId("6226ec40e3048a1ec408e51e")
        ]
}

 > db.products.find()               
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
{ "_id" : ObjectId("6226eab3e3048a1ec408e51b"), "name" : "monitor", "price" : 2500 }
{ "_id" : ObjectId("6226eacde3048a1ec408e51c"), "name" : "mouse", "price" : 300 }
{ "_id" : ObjectId("6226ec40e3048a1ec408e51d"), "name" : "computer table", "price" : 500 }
{ "_id" : ObjectId("6226ec40e3048a1ec408e51e"), "name" : "PenDrive", "price" : 400 }

 > db.products.find().pretty()
{
        "_id" : ObjectId("6226ea64e3048a1ec408e51a"),
        "name" : "keybord",
        "price" : 250
}
{
        "_id" : ObjectId("6226eab3e3048a1ec408e51b"),
        "name" : "monitor",
        "price" : 2500
}
{
        "_id" : ObjectId("6226eacde3048a1ec408e51c"),
        "name" : "mouse",
        "price" : 300
}
{
        "_id" : ObjectId("6226ec40e3048a1ec408e51d"),
        "name" : "computer table",
        "price" : 500
}
{
        "_id" : ObjectId("6226ec40e3048a1ec408e51e"),
        "name" : "PenDrive",
        "price" : 400
}

 > db.products.find()
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
{ "_id" : ObjectId("6226eab3e3048a1ec408e51b"), "name" : "monitor", "price" : 2500 }
{ "_id" : ObjectId("6226eacde3048a1ec408e51c"), "name" : "mouse", "price" : 300 }
{ "_id" : ObjectId("6226ec40e3048a1ec408e51d"), "name" : "computer table", "price" : 500 }
{ "_id" : ObjectId("6226ec40e3048a1ec408e51e"), "name" : "PenDrive", "price" : 400 }

 > db.products.update({_id:ObjectId("6226ec40e3048a1ec408e51d")}, {$set:{name: 'PC Table'}})      
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

 > db.products.find()
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
{ "_id" : ObjectId("6226eab3e3048a1ec408e51b"), "name" : "monitor", "price" : 2500 }
{ "_id" : ObjectId("6226eacde3048a1ec408e51c"), "name" : "mouse", "price" : 300 }
{ "_id" : ObjectId("6226ec40e3048a1ec408e51d"), "name" : "PC Table", "price" : 500 }
{ "_id" : ObjectId("6226ec40e3048a1ec408e51e"), "name" : "PenDrive", "price" : 400 }

 > db.products.deleteOne({_id:ObjectId("6226ec40e3048a1ec408e51d")})
{ "acknowledged" : true, "deletedCount" : 1 }

 > db.products.find()
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
{ "_id" : ObjectId("6226eab3e3048a1ec408e51b"), "name" : "monitor", "price" : 2500 }
{ "_id" : ObjectId("6226eacde3048a1ec408e51c"), "name" : "mouse", "price" : 300 }
{ "_id" : ObjectId("6226ec40e3048a1ec408e51e"), "name" : "PenDrive", "price" : 400 }

 > db.products.deleteMany({_id: {$in: [ObjectId("6226eacde3048a1ec408e51c"),ObjectId("6226ec40e3048a1ec408e51e")]}})
{ "acknowledged" : true, "deletedCount" : 2 }

 > db.products.find()
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
{ "_id" : ObjectId("6226eab3e3048a1ec408e51b"), "name" : "monitor", "price" : 2500 }
> db.createCollection('Reviews')
{ "ok" : 1 }
 
> show collections
db.Reviews.insertMany([{text:'This is good product', starts: 4, productId: ObjectId("6226ea64e3048a1ec408e51a") }, {text: 'This is very good product', starts: 4, productId: ObjectId("6226ea64e3048a1ec408e51a")}])
db.Rev"acknowledged" : true,:'This is good product', starts: 4, productId: ObjectId("6226ea64e3048a1ec408e51a") }, {text: 'This is very good product', starts: 5,}])        "insertedIds" : [
                ObjectId("6226f2d3e3048a1ec408e51f"),
                ObjectId("6226f2d3e3048a1ec408e520")
        ]
}
 
 
> db.Reviews.find()
{ "_id" : ObjectId("6226f2d3e3048a1ec408e51f"), "text" : "This is good product", "starts" : 4, "productId" : ObjectId("6226ea64e3048a1ec408e51a") }
{ "_id" : ObjectId("6226f2d3e3048a1ec408e520"), "text" : "This is very good product", "starts" : 4, "productId" : ObjectId("6226ea64e3048a1ec408e51a") }
> db.Reviews.find().pretty()
{
        "_id" : ObjectId("6226f2d3e3048a1ec408e51f"),
        "text" : "This is good product",
        "starts" : 4,
        "productId" : ObjectId("6226ea64e3048a1ec408e51a")
}
{
        "_id" : ObjectId("6226f2d3e3048a1ec408e520"),
        "text" : "This is very good product",
        "starts" : 4,
        "productId" : ObjectId("6226ea64e3048a1ec408e51a")
}
 
> db.Reviews.find()
{ "_id" : ObjectId("6226f2d3e3048a1ec408e51f"), "text" : "This is good product", "starts" : 4, "productId" : ObjectId("6226ea64e3048a1ec408e51a") }
{ "_id" : ObjectId("6226f2d3e3048a1ec408e520"), "text" : "This is very good product", "starts" : 4, "productId" : ObjectId("6226ea64e3048a1ec408e51a") }
 
> db.products.find()
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
{ "_id" : ObjectId("6226eab3e3048a1ec408e51b"), "name" : "monitor", "price" : 2500 }
 
> db.products.find().pretty()
{
        "_id" : ObjectId("6226ea64e3048a1ec408e51a"),
        "name" : "keybord",
        "price" : 250
}
{
        "_id" : ObjectId("6226eab3e3048a1ec408e51b"),
        "name" : "monitor",
        "price" : 2500
}
 
> db.products.find()
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
{ "_id" : ObjectId("6226eab3e3048a1ec408e51b"), "name" : "monitor", "price" : 2500 }
 
> db.products.find()
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
{ "_id" : ObjectId("6226eab3e3048a1ec408e51b"), "name" : "monitor", "price" : 2500 }
> db.products.deleteOne({_id: ObjectId("6226eab3e3048a1ec408e51b")})
{ "acknowledged" : true, "deletedCount" : 1 }
 
> db.products.find()
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250 }
 
> db.products.update({_id: ObjectId("6226ea64e3048a1ec408e51a")}, {$set: {Reviews:[{text:'This is good product',starts:5}, {text:'This is bad product', start:1}]}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
 
> db.products.find() 
{ "_id" : ObjectId("6226ea64e3048a1ec408e51a"), "name" : "keybord", "price" : 250, "Reviews" : [ { "text" : "This is good product", "starts" : 5 }, { "text" : "This is bad product", "start" : 1 } ] }
 
> db.products.find().pretty()
{
        "_id" : ObjectId("6226ea64e3048a1ec408e51a"),
        "name" : "keybord",
        "price" : 250,
        "Reviews" : [
                {
                        "text" : "This is good product",
                        "starts" : 5
                },
                {
                        "text" : "This is bad product",
                        "start" : 1
                }
        ]
}
>