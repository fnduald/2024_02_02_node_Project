const express = reqire("express");
const app = express();

let users = [
    {id : 0, data: "User 1"}
]
app.use(express,JSON());
app.get('/',(req,res) =>{

    let result = {
        cmd : -1,
        message : "Hello World"
    
    };
    res.send(result);
})
app.post('/userdata',(req, res) =>{
 const {id , data} = req.body;
 console.log(id, deta);
 let result = {
    cmd:-1,
    message : ''
 };
 let user=users.find (x=>x.id == id);
 if( user===underfined)
    {
        user.push({id,data})
        result.cmd = 1001;
        result.message = '유저 신규 등록.';
    
    } 
    else
    {
        console.log(id, user.data);
        user.data = data;
        result.cmd = 1002;
        result.message='데이터갱신';
    
    }
    res.send(result);
})
app.get('/userdata/list',(req, res) =>{
    let result = users.sort(function(a,b){
        return b.score;
    });


    result = result.slice (0, user.length);
 res.send({
    cmd : 1101,
    message:'',
    result
 })
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000');
});