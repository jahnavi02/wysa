const {Schema, model} = require("mongoose");

const assessmentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timeStamps: true,
});

module.exports = model('Assessment',assessmentSchema);