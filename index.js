require('dotenv').config();

const express = require('express');
const session = require('express-session');
const path = require('path');
const { sessionConfig } = require('./src/config/sessionConfig');
const userRoutes = require('./src/routes/userRoutes')
const sessionMiddleware = require('./src/middlewares/sessionMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session(sessionConfig));
app.use(sessionMiddleware);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, ()=>{
    console.log(`[+] Server is running on http://localhost:${PORT}`)
});
