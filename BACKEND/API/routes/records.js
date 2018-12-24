const express = require('express');
const router = express.Router();

const checkAuth = require('../middlewares/check-auth');
const Record = require('../controllers/recordController');

router.get('/find',checkAuth,Record.find);
router.post('/update',checkAuth,Record.update);
router.post('/delete',checkAuth,Record.delete);
router.get('/',checkAuth, Record.show);
router.post('/',checkAuth, Record.create);

module.exports = router;