const express = require('express');
const fileController = require('../controllers/file');

const router = express.Router();

router.post('/register-file', fileController.registerFile);
router.get('/:fileId', fileController.getFileById);

module.exports = router;

