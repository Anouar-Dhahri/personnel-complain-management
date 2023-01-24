const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    jwt.verify(token, process.env.TOKEN_SECRET)
}

module.exports = verifyToken;