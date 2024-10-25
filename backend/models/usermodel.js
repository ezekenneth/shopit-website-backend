const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');
const crypto = require("crypto")

// Declare the Schema of the Mongo model

var userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,   
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    
    password:{
        type:String,
        required:true,
    },
    role: {
        type: String,
        default: 'User',
    },
    isBlocked: {
        type:Boolean,
        default: false,
    },
    cart: {
        type: Array,
        default: []
    },
    address:{
        type: String,
    },

    wishlist:[{type: mongoose.Schema.Types.ObjectId , ref: "product" }],
    refreshToken: {
        type: String,
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    shippingAddress: {
        type: String,
    },
    billingAdress:{
        type:String,
    }
},
{
    timestamps: true,
});

userSchema.pre("save" ,async function(next){
    if (!this.isModified("password")){
        next();
    }
    const salt = bcrypt.genSaltSync(10);
this.password = bcrypt.hashSync(this.password, salt);

});


userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword , this.password)
};
//reset pasword
userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
  
    // Save the hashed token and its expiration date to the user object
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // Token valid for 10 minutes
  
    return resetToken;
};

//Export the model
const userschema = mongoose.model('User', userSchema);
module.exports = userschema; 