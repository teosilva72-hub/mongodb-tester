const express = require("express");
const conn = require('./config/connMongoDB');
const router = require('./api/routes/allRouter.js');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
app.use(router);
// app.use(cors());
// app.use(morgan('combined'));
const PORT = Number(process.env.PORT) || 3001;
app.listen(PORT, (e) => {
    if (e) console.log(e);
    console.log('server run port ', PORT);
});



