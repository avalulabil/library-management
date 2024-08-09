const express = require('express');
const MemberController = require('../controllers/memberController');
const router = express.Router();

router.post('/borrow', MemberController.borrowBook);
router.post('/return', MemberController.returnBook);
router.get('/', MemberController.getAllMembers);

module.exports = router;