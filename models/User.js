var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
    email: {
        type: String,
        required: 'Please Enter your E-mail address',
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: 'Please Enter your Password' 
    }
}, {timestamps: true});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');