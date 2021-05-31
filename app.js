const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('ur on homepage');
        res.end();
    }else if(req.url=='/another'){
        res.write('im another route');
        res.end();
    }
    res.write("i am listening");
    res.end();
})

server.listen(3000, ()=>{
    console.log('server started on port 3000')
})