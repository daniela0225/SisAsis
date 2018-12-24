const express = require('express');
const router = express.Router();

const checkAuth = require('../middlewares/check-auth');
const Tutor = require('../controllers/tutorController');

router.get('/find',checkAuth,Tutor.find);
router.post('/update',checkAuth,Tutor.update);
router.post('/delete',checkAuth,Tutor.delete);
router.get('/',checkAuth, Tutor.show);
router.post('/',checkAuth, Tutor.create);

module.exports = router;