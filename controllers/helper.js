const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
    hashPassword: hashPassword,
    comparePassword: comparePassword,
    generateToken: generateToken
};

async function hashPassword (password, salt) {
    return bcrypt.hash(password, salt)
}

function comparePassword (hashPassword, password){
    return bcrypt.compare(password, hashPassword);
}

function generateToken (id) {
    const token = jwt.sign({
            userId: id
        },
        process.env.SECRET, {expiresIn: '5d'}
    );
    return token;
}
