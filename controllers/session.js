const Session = require('../models').Session;

// const constants = require('../constants');

const getSessionList = (req, res) => {
    console.log(Session);
    Session.findAll()
    .then(sessions => {
        res.status(200).json(sessions)
        
    })
    .catch(err => {
        console.log(err);
    })
}

const createSession = (req, res) => {
    Session.create(req.body)
    .then(newSession => {
        res.status(200).json(newSession);
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
    getSessionList,
    createSession,
    // getCityById
}