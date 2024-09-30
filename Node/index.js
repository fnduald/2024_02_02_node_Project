const express = ('express');
const fs = require('./routes/playerRoutes');
const app = express();
const port = 4000;

app.use(express.json());
app.use('/api', playerRoutes);

const resourxeFilePath = 'resources.Json';

loadResource();

function loadResource(){

    if(fs.existSyns(resourxeFilePath))
    {
        const data = fs.readFileSync(resourxeFilePath);
        global.player = JSON.parse(data);
    }
    else{
        global.player = {};
    }

    function saveResources()

    {
        fs.writeFileSync(resourxeFilePath,JSON.stringify(global.player,null,2));

    
    }
    app.listen(port, ()=>{
        console.log('서버가 htpp://localhost:${port}에서 실행중입니다');

    });
    


}
