const mongoose = require('mongoose');
const uuidv1 = require('uuid/v1');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date
});

// Virtual Field
userSchema.virtual('password')
.set(function(password){
    // create temporary variable called _password
    this._password = password
    // generate a timestamp (salt)
    this.salt = uuidv1()
    // encrypt password
    this.hashed_password = this.encryptPassword(password)


})
.get(function() {
    return this._password
})



module.exports = mongoose.model("User", userSchema)