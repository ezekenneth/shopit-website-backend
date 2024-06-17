const mongoose = require('mongoose'); 
const { count } = require('./usermodel');

// Declare the Schema of the Mongo model
var orderschema = new mongoose.Schema({
    products: [
        {product: {
          type:mongoose.Schema.Types.ObjectId,
          ref: "product",
        },
        count: Number,
        color: String,
        }
    ],

    paymentIntent: {},
    orderStatus:{
        type: String,
        default: "not processed",
        enum: ["not processed", "cash on Delivery", "processing", "Dispatched", "Cancelled", "Delivered"],
    },
    orderby: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    
},
{
 timestamps: true,
}
);

//Export the model
module.exports = mongoose.model('order', orderschema);