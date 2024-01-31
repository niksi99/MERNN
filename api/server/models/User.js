const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        unique: true,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

UserSchema.pre("save", async function(next) {
    if(!this.isModified)
        next();

    this.password = await bcrypt.hash(this.password, 12);
})

UserSchema.methods.GenerateJWT = function() {
    return jsonwebtoken.sign(
        {id: this._id, email: this.email },
        process.env.JWT_SECRET,
        { expiresIn: 900 }
    )
}

UserSchema.methods.ComparePasswords = async function(PasswordForChecking) {
    return await bcrypt.compare(PasswordForChecking, this.password);
}

module.exports = mongoose.model("User", UserSchema);