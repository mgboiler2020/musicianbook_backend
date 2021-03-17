const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// router.get('/profile', ctrl.user.getProfile);
router.get('/all', ctrl.session.getSessionList);
router.post('/createSession', ctrl.session.createSession);
// router.put('/profile', ctrl.user.editProfile);

module.exports = router;