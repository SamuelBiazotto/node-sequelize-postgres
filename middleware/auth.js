const jwt = require('jsonwebtoken');
const User = require('../controllers/userController');


module.exports = {
    autMiddleware: verifyToken,
};


async function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if(!token){
        return res.status(400).send({
            message:'Token is not provided'
        });
    }
    try{
        const decoded = jwt.verify(token, process.env.SECRET);
        console.log('decoded: ', decoded.userId);
        await User.findOneUser(decoded.userId).then( ()=> {
            next();
        });
    }catch (e) {
        console.log('error: ', e.name, e.message);
        res.status(403).json({
            status:403,
            data:{error: e.name+': '+ e.message},
            message:'failed'
        })
    }
}

