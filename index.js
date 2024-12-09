const express = require('express');
const userRoutes = require('./routes/userRouter')

const app = express();
const port = 8080;

require('dotenv').config();

app.use(express.json());
app.use(userRoutes);

app.listen(port, ()=>{
    console.log(`[+] Server is running on http://localhost:${port}`)
});
