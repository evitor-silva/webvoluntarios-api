const { User } = require('../Models/index.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
dotenv.config()

const register = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        console.log('Iniciando registro de usuário');
        console.log('Dados recebidos:', { email, name });

        const existingUser = await User.findOne({ where: { email } });
        console.log('Verificação de e-mail duplicado concluída');

        if (existingUser) {
            console.log('Erro: E-mail já registrado:', email);
            return res.status(409).send({
                status: 409,
                message: 'Conta já registrada'
            });
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        console.log('Senha criptografada com sucesso');

        await User.create({
            name: name,
            password: hashedPassword,
            email: email
        });

        console.log('Usuário registrado com sucesso:', email);
        return res.status(201).send({
            status: 201,
            message: 'Conta criada com sucesso'
        });

    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
        return res.status(500).send({
            status: 500,
            message: 'Erro interno do servidor'
        });
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
            id: existingUser.id,
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