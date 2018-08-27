var app = require('express')();

app.get('/',function (req,res,err){

    res.header("content-type","text/event-stream");
    res.header("cache-control","no-cache");
    res.header("Access-Control-Allow-Origin", "http://localhost:63342");

    //触发message
    // res.write("\n\r");
    res.write("id: " + Date.now() + "\ndata: send success\n\n");
    var interval= setInterval(function(){
        res.write("data: " + (new Date()) + "\n\n");
    },1000);

    res.onclose=function (){
        console.log("connection is close");
        clearInterval(interval);
    }
    // res.end();
});

app.listen(8080,function (){
    console.log("listen on 8080");
});