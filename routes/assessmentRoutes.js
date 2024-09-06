const express = require('express');
const router = express.Router();
const sleepAssessmentController = require('../controllers/sleepAssessmentController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:assessmentId/questions', authMiddleware, sleepAssessmentController.getQuestions);
router.post('/:assessmentId/responses', authMiddleware, sleepAssessmentController.submitResponses);
router.get('/:assessmentId/efficiency', authMiddleware, sleepAssessmentController.getSleepEfficiency);

module.exports = router;
