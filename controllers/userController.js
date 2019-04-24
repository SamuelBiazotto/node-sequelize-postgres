const User  = require('../app/models').User;
const Profile = require('../app/models').Profile;
const helper = require('./helper');


module.exports = {
    getAllUsers: getAllUsers,
    findOneUser: findOneUser,
    findByEmail: findByEmail,
    createUser: createUser,
}


async function getAllUsers () {
    return User.findAll({
        include:[{
            model:Profile,
        }],
        attributes:{exclude: ['password']}
    })
}

async function findOneUser (id) {
    return User.findByPk(id, {
        include:[{              // comentar include caso nao deseje trazer o objeto profile dentro de usuario
            model:Profile,      // e quiser somente o id de seu profiles
        }],
        attributes:{exclude: ['password']}
    })
}

async function createUser (UserObj) {
    helper.hashPassword(UserObj.password, 10)
        .then( hashPassword => {
            UserObj.password = hashPassword;
            return User.create(UserObj)
        })
        .catch(error => {
            return error
        });
}


async function findByEmail (email, password) {
    let x = null;
    await User.findOne({
        where: {email: email},
    }).then(async user => {
        await helper.comparePassword(user.password, password).then( data => {
            if (data === true)
                x = user;
            else
                x = null;
        });
    }).catch( async error => {
            console.log(error)
        });

    return x;
}
