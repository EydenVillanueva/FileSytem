const express = require('express');
const {body} = require('express-validator');

const fileRoutes = require('./fileController');
const {bloodTypes} = require('../../constant/bloodTypes');

const router = express.Router();

router.post('/register-file', [
    body('patientName')
        .isString()
        .not().isEmpty(),
    body('bloodType')
        .isIn(bloodTypes)
        .isString(),
    body('allergies')
        .isArray()
    ],fileRoutes.registerFile);

router.get('/:fileId', fileRoutes.getFileById);

module.exports = router;

