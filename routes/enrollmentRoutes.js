const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.post('/enrollments', enrollmentController.enrollStudent);

router.get('/enrollments', enrollmentController.getEnrollments);

module.exports = router;
