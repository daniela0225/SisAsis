const express = require('express');
const router = express.Router();
const User = require('../controllers/userController');
const checkAuth = require('../middlewares/check-auth');
const accessRules = require('../middlewares/access-rules');

router.post('/password', accessRules, User.password);
router.post('/login',User.login);
router.get('/find',checkAuth, accessRules, User.find);
router.post('/search',checkAuth, accessRules, User.search);
router.get('/menu',checkAuth, accessRules, User.menu);
router.get('/edit',checkAuth, accessRules, User.edit);
router.get('/getUserById', checkAuth, accessRules, User.getUserById);
router.post('/update',checkAuth, accessRules, User.update);
router.get('/delete',checkAuth, accessRules, User.delete);
router.get('/',checkAuth, accessRules, User.show);
//router.post('/', accessRules, User.create);
router.post('/', User.create);

module.exports = router;