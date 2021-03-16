const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


// router.get('/profile', ctrl.user.getProfile);
router.get('/all', ctrl.band.getBandList);
router.post('/createBand', ctrl.band.createBand);
// router.put('/profile', ctrl.user.editProfile);

module.exports = router;