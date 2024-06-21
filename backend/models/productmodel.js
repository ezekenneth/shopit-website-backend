const mongoose = require("mongoose");


//meal schema

var productschema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        category:{
            type: String,
            require: true,
        },
        brand: {
            type: String,
            required: true,
        },
        quantity: {
          type: Number,
          default: 1,
        },
        sold: {
            type: Number,
            default: 0,
            
        },
        images: [],

        color: [],
        
        tags: [],

        ratings:[  
            {
           star: Number,
           comment: String,
           postedby: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
           },
        ],
        
        totalrating: {
            type: String,
            default: 0,
         },

    },
    {timestamps: true}

 );

const product = mongoose.model("product", productschema);
module.exports= product;