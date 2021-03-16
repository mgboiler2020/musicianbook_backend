const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// router.get('/profile', ctrl.user.getProfile);
router.get('/all', ctrl.user.getUserList);
router.post('/login', ctrl.user.login);
router.post('/signup', ctrl.user.signup);
// router.put('/profile', ctrl.user.editProfile);

module.exports = router;