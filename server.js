const path = require('path');
const express = require('express');
const app = express();


users=[];
connections=[];

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 3000;

app.listen(port,(flag,err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(` server running on port ${port}`);
})