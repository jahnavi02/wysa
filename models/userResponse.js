const {Schema, model} = require("mongoose");

const userResponseSchema = new Schema({
    assessmentId: { 
        type: String, 
        required: true 
    },  
    questionId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Question', 
        required: true 
    },
    response: { 
        type: String, 
        required: true 
    },
}, {
    timeStamps: true,
});

module.exports = model('UserResponses', userResponseSchema)