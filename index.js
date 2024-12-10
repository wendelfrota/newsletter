require('dotenv').config();

const express = require('express');
const path = require('path');
const userRoutes = require('./src/routes/userRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(userRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, ()=>{
    console.log(`[+] Server is running on http://localhost:${PORT}`)
});
