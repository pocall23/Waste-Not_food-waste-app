const jwt = require('jsonwebtoken');

const secret = 'wastenotsecret';
const expiration = '3h';

module.exports = {
    signToken: function ({ email, name, _id}){
        const payload = { email, name, _id};
        return jwt.sign({ data: payload}, secret, {expiresIn: expiration})
    }
}