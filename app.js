const express=require('express');
const app=express();

app.use(express.static(__dirname+'/static'));

app.get('/home',(req,res)=>{
    res.render(__dirname+'/static/index.html');

});

app.listen(3000,()=>{
    console.log('listening');

});