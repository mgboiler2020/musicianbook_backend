const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/all', ctrl.user.getAll);
// router.put('/profile', ctrl.user.editProfile);

module.exports = router;