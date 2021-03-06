const User = require('../models').User;

// const constants = require('../constants');

const getUserList = (req, res) => {
    console.log(User);
    User.findAll()
    .then(users => {
        res.status(200).json(users)
        
    })
    .catch(err => {
        console.log(err);
    })
}

const login = (req, res) => {
    console.log(req.body);
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then(foundUser =>{
        if(foundUser){
            res.status(200).json({'user' : foundUser.id})
        }
        else {
            res.status(400).send(`ERROR: Wrong username and/or password`);
        }
    })
    .catch(err => {
        res.status(500).send(`ERROR: ${err}`);
    })
}
//Allow a person to enter information and create a user account
const signup = (req, res) => {
    console.log(req.body);
    console.log('in signup on backend');
    User.create(req.body)
    .then(newUser => {
        res.status(200).json(newUser);
    })
}

//Edit user
const editUser = (req, res) => {
    console.log(req.body);
    console.log('in edit user on backend');
    User.update(req.body)
    .then(updatedUser => {
        res.status(200).json(updatedUser);
    })
}

const selectUserById = (req, res) => {
    console.log(User);
    User.findOne()
    .then(user => {
        res.status(200).json(user)
        
    })
    .catch(err => {
        console.log(err);
    })
}


// const getProfile = (req, res) => {
//     console.log('inside getProfile');
//     console.log(req.params.id);
//     User.findByPk(req.params.id, {
//         include: [
//             {
//                 model: Session,
//                 attributes: ['id', 'sessionName']
//             },
//         ]
//     })
//     .then(user => {
//         res.status(200).json(user)
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }

// const getUserById = (req, res) => {
//     let sort = 'DESC';
//     if(req.query.sorted === 'asc')
//         sort = 'ASC';
    
//     City.findByPk(req.params.city, {
//         include: [
//             {
//                 model: Post,
//                 attributes: ['id', 'title', 'body', 'img'],
                
//             }
//         ],
//         order: [
//             [{model: Post}, 'createdAt', sort]
//         ]
//     })
//     .then(foundCity => {
//         if(foundCity === null){
//             res.status(constants.BAD_REQUEST).send('ERROR: Incorrect City Id')
//         }else{
//             res.status(constants.SUCCESS).json(foundCity)
//         }
//     })
//     .catch(err => {
//         res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
//     })
// }

module.exports = {
    getUserList,
    login,
    signup,
    editUser,
    selectUserById, 
    // getProfile,
    // getCityById
}