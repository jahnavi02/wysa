const {Schema, model} = require("mongoose");

const questionSchema = new Schema({
    description: {
        type: String,
        required: [true, "Question description is required to be displayed"]
    }
},{
    timeStamps: true,
});

module.exports = model("Question", questionSchema);