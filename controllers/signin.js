const User = require('./userController');
const Helper = require('./helper');


module.exports = {
    signIn: signIn
};


async function signIn(req, res, next){
// todo - verificar se tem email
// todo - verificar se existe password
    // User.findOneUser(req.body.id).then( data => {
    //     console.log('teste: ',data);
    // });
    // return res.status(200);

    User.findByEmail(req.body.email, req.body.password)
        .then( data => {
            if (data !== null ) {
                const token = Helper.generateToken(data.id);
                delete data.password;
                return res.status(200).json({
                    status:'Success',
                    data:{user: data, token: token},
                    message:'You Can Pass !',
                })
            }else{
                res.status(403).json({
                    status:'Errorr',
                    data: error,
                    message:'You Shaw Not Pass Wrong Password!',
                })
            }
        })
        .catch( error => {
            res.status(403).json({
                status:'Error',
                data: error,
                message:'You Shaw Not Pass !',
            })
        });
}