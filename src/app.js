const express = require("express");
const conn = require('./config/connMongoDB');
const app = express();
const PORT = Number(process.env.PORT) || 3001;
const router = require('./api/routes/allRouter.js');
app.use(router);
app.listen(PORT, (e) => {
    if (e) console.log(e);
    console.log('server run port ', PORT);
});




