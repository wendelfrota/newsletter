const bcrypt = require('bcrypt')
const User = require('../models/User');

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return {
        salt,
        hashedPassword
    };
}

function createUserSession(req, user) {
    req.session.user = {
        name: user.name,
        email: user.email
    }
}

exports.createUser = async (req, res) => {
    try {
        const { name, email, password, 'check-password': checkPassword } = req.body;

        if (!name || !email || !password || !checkPassword) {
            return res.status(400).json({ error: 'Name, email, password and check-password are required.' });
        }

        if (password !== checkPassword) {
            return res.status(400).json({ error: 'Password and Check-Password must be equal.' });
        }

        const { salt, hashedPassword } = await hashPassword(password);

        const user = await User.create({ name, email, password: hashedPassword, _salt: salt });

        createUserSession(req, user);

        res.status(201).render('pages/success', {
            title: 'Página de sucesso',
            body: `Bem vindo, ${user.name}!`
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }
        
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        const { password: storedHash } = user;
        const isPasswordValid = await bcrypt.compare(password, storedHash);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }

        createUserSession(req, user);

        res.status(200).render('pages/success', {
            title: 'Página de sucesso',
            body: `Bem vindo de volta, ${user.name}!`
        });
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
