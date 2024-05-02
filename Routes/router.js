const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

// Routes for Component One
router.post('/componentOne/add', controllers.addComponentOne);
router.put('/componentOne/update/:id', controllers.updateComponentOne);
router.get('/componentOne/count', controllers.getComponentOneCount);
router.get('/componentOne/newest', controllers.getNewestComponentOne);

// Routes for Component Two
router.post('/componentTwo/add', controllers.addComponentTwo);
router.put('/componentTwo/update/:id', controllers.updateComponentTwo);
router.get('/componentTwo/count', controllers.getComponentTwoCount);
router.get('/componentTwo/newest', controllers.getNewestComponentTwo);


// Routes for Component Three
router.post('/componentThree/add', controllers.addComponentThree);
router.put('/componentThree/update/:id', controllers.updateComponentThree);
router.get('/componentThree/count', controllers.getComponentThreeCount);
router.get('/componentThree/newest', controllers.getNewestComponentThree);


module.exports = router;
