const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const commentRoute = require('./routes/commentRoute');






//const walletRouter = require('./routes/walletRoute');
const app = express();

// 1. Mongo Database Connection

connectDB();

// 2. Middleware
app.use(express.json());

app.use(cors());

app.use('/', commentRoute);





// 3. Server Creation
const PORT = process.env.PORT || 8555;
app.listen(PORT, function(){
    console.log("server is up on port " + PORT);
})

