const express = require('express');
const router = express.Router();

const checkAuth = require('../middlewares/check-auth');
const accessRules = require('../middlewares/access-rules');
const School = require('../controllers/schoolController');

router.get('/find',checkAuth, accessRules,School.find);
router.post('/update',checkAuth, accessRules,School.update);
router.post('/delete',checkAuth, accessRules,School.delete);
router.get('/',checkAuth, accessRules, School.show);
router.post('/',checkAuth, accessRules, School.create);

module.exports = router;