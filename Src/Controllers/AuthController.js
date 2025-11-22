const { User } = require('../Models/index.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
dotenv.config()

const register = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(401).send({
                status: 401,
                message: 'Conta já registrada'
            })
        }

        const salt = bcrypt.genSaltSync(10);

        User.create({
            'name': name,
            'password': bcrypt.hashSync(password, salt),
            'email': email
        })

        return res.status(201).send({
            status: 201,
            message: 'Conta criada com sucesso'
        })

    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: error
        })
    }

}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ where: { email } });

        if (!existingUser || !bcrypt.compareSync(password, existingUser.password)) {
            return res.status(401).send({
                status: 401,
                message: 'Senha ou email incorretos'
            })
        }

        let exp = Math.floor(Date.now() / 1000) + (60 * 60);
        let token = jwt.sign({
            exp: exp,
            name: existingUser.name
        }, process.env.JWT_SECRET)

        return res.status(200).send({
            exp: exp,
            token: token
        })

    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: error
        })
    }
}

module.exports = {
    register,
    login
}