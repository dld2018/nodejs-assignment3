const express = require('express');
const userRoute = require('./routes/user.js');
const rootRoute = require('./routes/root.js');
const path = require('path');


const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.use(userRoute);
app.use(rootRoute);




app.listen(3000);
