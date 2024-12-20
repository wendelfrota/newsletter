require('dotenv').config();

const express = require('express');
const session = require('express-session');
const path = require('path');
const userRoutes = require('./src/routes/userRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60
    }
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user;
    next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(PORT, ()=>{
    console.log(`[+] Server is running on http://localhost:${PORT}`)
});
