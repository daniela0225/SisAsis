const express = require('express');
const router = express.Router();

const checkAuth = require('../middlewares/check-auth');
const accessRules = require('../middlewares/access-rules');
const Tutor = require('../controllers/tutorController');

router.get('/find',checkAuth, accessRules,Tutor.find);
router.post('/update',checkAuth, accessRules,Tutor.update);
router.post('/delete',checkAuth, accessRules,Tutor.delete);
router.get('/',checkAuth, accessRules,Tutor.show);
router.post('/',checkAuth, accessRules, Tutor.create);

module.exports = router;