const product = require("../models/productmodel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify")
const validateDBid =require("../utils/validateDBid");
const userschema = require("../models/usermodel");
const {cloudinaryuploadImg, cloudinaryDeleteImg} = require('../utils/cloudinary');
const fs = require('fs')



//creation meal
const createProduct = asyncHandler(async(req, res) =>{
    try{
        if (req.body.title){
            req.body.slug = slugify(req.body.title);
        }
     const newProduct = await product.create(req.body);
     res.json(newProduct);
    } catch (error) {
        throw new Error(error)
    }
    });

    //update meal

    const updateproduct = asyncHandler(async(req , res) => {
        const { id } = req.params;
        validateDBid(id);
        try{
            if (req.body.title) {
                req.body.slug = slugify(req.body.title);
            }
            const updateProduct = await product.findByIdAndUpdate(id, req.body, {
                new: true
            });
            res.json(updateProduct);
            
        } catch (error) {
            throw new Error(error);
        }
    });

   //delete meal
    const deleteproduct = asyncHandler(async(req , res) => {
        const { id } = req.params;
        validateDBid(id);
        try{

        const deleteProduct = await product.findByIdAndDelete(id)
            
        res.json(deleteProduct);
            
        } catch (error) {
            throw new Error(error);
        }
    });

    //get a product

    const getaProduct = asyncHandler(async (req , res) => {
        const { id } = req.params;
        validateDBid(id);
        try{
            const findProduct = await product.findById(id);
            res.json(findProduct);
        } 
      

        catch (error) {
          throw new Error(error);
        }
    });

    //get all product

    const getallproduct = asyncHandler(async (req, res) => {

        try{

            //fitering
            const queryobj = { ...req.query };
            const excludefields = ["page", "sort", "limit", "fields"];
            excludefields.forEach((el) => delete queryobj[el]);

            let querystr = JSON.stringify(queryobj);
            querystr = querystr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `${match}`);

           let query  = product.find(JSON.parse(querystr));

            //sorting
            if (req.query.sort) {
                const sortBy =req.query.sort.split(",").join(" ");
                query = query.sort(sortBy);
             } else {
                 query = query.sort("-createdAt");
             }
            

            //limiting the fields
            if (req.query.fields) {
                const fields = req.query.fields.split(",").join(" ");
            
                // (sub)Check if fields is not empty before applying to select method
                
            if (fields.trim() !== "") {
                query = query.select(fields);
            }else {
                query = query.select('__v');
            }
            }
            

            //pagination funtion
            const page = req.query.page;
            const limit = req.query.limit;
            const skip = (page - 1) * limit;
            query = query.skip(skip).limit(limit);
            if (req.query.page){
             const productCount = await product.countDocuments();
             if(skip >= productCount) throw new Error("this page does not eists");
            };
            

            const Product = await query;
            res.json(Product);
        } catch(error) {
            throw new Error(error);
        }
    });


    //add to wishlist

    const addToWishlist = asyncHandler(async (req, res) => {
       const { _id } = req.user;
       const { prodId } = req.body;
       try{
        const user =await userschema.findById(_id);
        const alreadyadded = user.wishlist.find((Id) => Id.toString() === prodId);
        if (alreadyadded) {
            let user = await userschema.findByIdAndUpdate(
               _id, {
                $pull: {wishlist: prodId},
            },{
                new: true,
            }
            );
            res.json(user);
        } else {
            let user = await userschema.findByIdAndUpdate(
                _id, {
                 $push: {wishlist: prodId},
             },{
                 new: true,
             }
             );
             res.json(user);
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ error: 'Internal Server Error' });
    }
    });

   //create rating funtion

   const rating = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { star, prodId, comment } = req.body;

    try {
        const Product = await product.findById(prodId);
        
        let alreadyRated = Product.ratings.find(
            (userId) => userId.postedby.toString() === _id.toString()
        );

        if (alreadyRated) {
            // Update the existing rating
            const updateRating = await product.updateOne(
                {
                   ratings: { $elemMatch: alreadyRated },
                },
                {
                    $set: { 'ratings.$.star': star , 'ratings.$.comment': comment },
                },
                { new: true }
            );
           
        } else {
            // Add a new rating
            const rateProduct = await product.findByIdAndUpdate(
                prodId,
                {
                    $push: {
                        ratings: {
                            star: star,
                            comment: comment,
                            postedby: _id,
                        },
                    },
                },
                { new: true }
            );
           
        }
        const getallratings = await product.findById(prodId);
        let totalRatings = getallratings.ratings.length;
        let ratingsum = getallratings.ratings
         .map((item) => item.star)
         .reduce((prev, curr) => prev + curr, 0);
         let actualRating = Math.round(ratingsum/totalRatings);
         let finalproduct = await product.findByIdAndUpdate(prodId, 
         {
            totalrating: actualRating,
         },
         { new:true }
        );
          res.json(finalproduct);
    } catch (error) {
        console.error(error);
        throw new Error(error)
    }
});


const uploadImages = asyncHandler(async (req, res) => {

    try {
        const uploader = (path) => cloudinaryuploadImg(path, "images");
        const urls = [];
        const files = req.files;

        for (const file of files) {
            const { path } = file;
            const newpath = await uploader(path);
            urls.push(newpath);
            fs.unlinkSync(path);
        }

        const images = urls.map((file) => {
            return file;
        });

        res.json(images);

    } catch (error) {
        console.error(error);
        throw new Error(error)        
    }
});

const deleteImages = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = cloudinaryDeleteImg(id, "images");
       
        res.json({
            status: "image successfully deleted",
            deleted
        })

    } catch (error) {
        console.error(error);
        throw new Error(error)        
    }
});



module.exports = {
    createProduct,
    getaProduct,
    getallproduct,
    updateproduct,
    deleteproduct,
    addToWishlist,
    rating,
    uploadImages,
    deleteImages,
};