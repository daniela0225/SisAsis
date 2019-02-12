const express = require('express');
const router = express.Router();

const checkAuth = require('../middlewares/check-auth');
const accessRules = require('../middlewares/access-rules');
const Teacher = require('../controllers/teacherController');

router.post('/find',checkAuth, accessRules,Teacher.find);
router.post('/update',checkAuth, accessRules,Teacher.update);
router.post('/delete',checkAuth, accessRules,Teacher.delete);
router.get('/',checkAuth, accessRules, Teacher.show);
router.post('/',checkAuth, accessRules, Teacher.create);


module.exports = router;