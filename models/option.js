const {Schema, model} = require("mongoose");

const optionSchema = new Schema({
    optionText: {
        type: String,
        required: [true, 'Name is required']
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: "Question"
    }
},{
    timeStamps: true,
});

module.exports = model('options',optionSchema)