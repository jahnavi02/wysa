const {Schema, model} = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    nickName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    timeStamps: true,
});


// Pre-save middleware to hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare the entered password with the hashed password
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = model('User', userSchema);