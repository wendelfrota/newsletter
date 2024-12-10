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

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.query;
        const { salt, hashedPassword } = await hashPassword(password);

        const user = await User.create({ name, email, password: hashedPassword, _salt: salt })

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message })
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
