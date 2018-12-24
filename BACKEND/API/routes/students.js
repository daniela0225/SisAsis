const express = require('express');
const router = express.Router();

const checkAuth = require('../middlewares/check-auth');
const Student = require('../controllers/studentController');

router.get('/find',checkAuth,Student.find);
router.post('/update',checkAuth,Student.update);
router.post('/delete',checkAuth,Student.delete);
router.get('/',checkAuth, Student.show);
router.post('/',checkAuth, Student.create);

module.exports = router;