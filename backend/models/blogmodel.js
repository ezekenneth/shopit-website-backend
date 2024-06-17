const mongoose = require('mongoose'); // Erase if already required
const User = require("./usermodel");


// Declare the Schema of the Mongo model
var BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description: {
        type: String,
        required: true,
        unique: false,
    },
        
   category:{
        type:String,
        required:true,
    },
    numviews:{
        type: Number,
        default: 0,
    },
    isLiked: {
        type: Boolean,
        default: false,
    },
    isDisliked: {
        type: Boolean,
        default: false,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
    ],

    images: [],
    author: {
        type: String,
        default: "Admin"
    }, 
}, {
   toJSON: {
    virtual: true,
   },
   toObject: {
    virtuals: true,
   },
   timestamps:true,
});

//Export the model
const Blog = mongoose.model('Blog', BlogSchema);
 module.exports = Blog;
