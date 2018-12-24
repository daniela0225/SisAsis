const express = require('express');
const router = express.Router();

const checkAuth = require('../middlewares/check-auth');
const School = require('../controllers/schoolController');

router.get('/find',checkAuth,School.find);
router.post('/update',checkAuth,School.update);
router.post('/delete',checkAuth,School.delete);
router.get('/',checkAuth, School.show);
router.post('/',checkAuth, School.create);

module.exports = router;