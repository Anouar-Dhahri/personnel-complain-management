const jwt = require('jsonwebtoken');

const verifyAccessToken = (req, res, next) => {
  const bearerHeader = req.headers["Authorization"];

  if(typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next()
  }else {
    res.sendStatus(401);
  }
}

module.exports = verifyAccessToken