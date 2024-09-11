const express = require('express');
const router = express.Router();
const {populateComment, searchComment} = require('../controllers/commentContoller');

router.get('/populate', populateComment);
router.post('/search', searchComment);
module.exports = router;