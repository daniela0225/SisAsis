const express = require('express');
const router = express.Router();

const checkAuth = require('../middlewares/check-auth');
const accessRules = require('../middlewares/access-rules');
const Student = require('../controllers/studentController');

router.get('/find',checkAuth, accessRules,Student.find);
router.post('/update',checkAuth, accessRules,Student.update);
router.post('/delete',checkAuth, accessRules,Student.delete);
router.get('/',checkAuth, accessRules, Student.show);
router.post('/',checkAuth, accessRules, Student.create);

module.exports = router;