const HttpError = require("../models/http-error");
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try{
    const token = req.headers.authorization.split(' ')[1]; // Authorization Bearer TOKEN
    if(!token) {
      throw new Error('no token found')
    }
    const decodedToken = jwt.verify(token, "supersecret_dont_share");
    req.userData = {userId: decodedToken.userId}
    next();    
  } catch (err) {
    const error = new HttpError('Authentaication failed!', 401);
    return next(error);
  }
  
};