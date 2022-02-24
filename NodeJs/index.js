//console.log('Hello Node');

//////////HTTP module/////////////
const http=require('http');

const fs=require('fs');
const path=require('path');
const app=http.createServer((req, res)=>{
    console.log(req.url);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    // if(req.url=='/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'),(err, content)=>{
    //         if(err){
    //             throw err;
    //         }
    //         res.end(content);
    //     })
    // }else if(req.url=='/about.html'){
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'),(err, content)=>{
    //         if(err){
    //             throw err;
    //         }
    //         res.end(content);
    //     })
    // }
  
  //message on browser when server on
  //res.end("Welcome Node Js Server");

//   let filePath=path.join(__dirname, 'public', req.url=='/' ? 'index.html' : req.url + '.html')
let filePath=path.join(__dirname, 'public', req.url=='/' ? 'index.html' : req.url)

  //for file extention
  let contentType='text/html'
  let ext =path.extname(filePath)
  if(!ext){
      filePath += '.html'
  }
  switch (ext) {
      case '.css':
        contentType='text/css'
          break;
      case '.js':
        contentType='text/javascript'
            break;
      default:
        contentType='text/html'
  }

  fs.readFile(filePath, (err, content)=>{

    if(err){
        fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data)=>{
            if(err){
                    res.writeHead(500);
                    res.end('Error')
            }else{
                res.writeHead(404, {
                    //'Contex-Type': 'text/html'
                    'Contex-Type':  contentType
                })
                res.end(data)
            }
        })
    }else{
     res.writeHead(200, {
        // 'Content-Type': 'text/html'
        'Contex-Type':  contentType
     })
     res.end(content)   
    }
    

    //   if(err){
    //       res.writeHead(500);
    //       res.end('Error')
    //   }
  })

})

const PORT=process.env.PORT || 8000; //Check post available or not and set default
app.listen(PORT, ()=>{
    console.log(`Server running/listen on port: ${PORT}`);
})