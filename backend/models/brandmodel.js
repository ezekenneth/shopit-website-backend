const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var prodBrandSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },  
},
{
    timestamps: true,
}
);

//Export the model
const prodBrand = mongoose.model('Brand', prodBrandSchema);
module.exports = prodBrand;