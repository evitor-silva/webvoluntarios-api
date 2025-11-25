const jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
dotenv.config()

const AuthMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const bearer = authHeader.substring(7);

        try {
            jwt.verify(bearer, process.env.JWT_SECRET);
            return next();
        } catch (err) {
            return res.status(401).send({ message: err});
        }
    }

    return res.status(401).send({ message: 'Sem autorização' });
}

module.exports = AuthMiddleware;