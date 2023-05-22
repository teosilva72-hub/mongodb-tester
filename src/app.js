const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, (e)=>{
    if(e) console.log(e);
    console.log('server run port ', PORT);
});