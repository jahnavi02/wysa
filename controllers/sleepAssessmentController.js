const Question = require('../models/question');
const Option = require('../models/option');
const UserResponse = require('../models/userResponse');

exports.getQuestions = async (req, res) => {
    try {
        const questions = await Question.find().populate('options');
        res.status(200).json({
            assessmentId: req.params.assessmentId,
            questions: questions.map(question => ({
                questionId: question._id,
                questionText: question.questionText,
                questionType: question.questionType,
                options: question.options.map(option => ({
                    optionId: option._id,
                    optionText: option.optionText,
                }))
            }))
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.submitResponses = async (req, res) => {
    const { responses } = req.body;
    try {
        for (let response of responses) {
            const userResponse = new UserResponse({
                assessmentId: req.params.assessmentId,
                questionId: response.questionId,
                response: response.response,
            });
            await userResponse.save();
        }
        res.status(200).json({ message: 'Responses saved' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.getSleepEfficiency = async (req, res) => {
    try {
        // Placeholder logic for calculating sleep efficiency
        // In a real scenario, you would calculate this based on user responses
        const sleepEfficiency = 78;  // This could be calculated dynamically based on responses
        res.status(200).json({ sleepEfficiency });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
