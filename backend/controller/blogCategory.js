const blogCategory = require("../models/blogCategory");
const asyncHandler = require("express-async-handler");
const validateDBid =require("../utils/validateDBid");

//create category

const createBlogCategory =  asyncHandler(async(req, res) => {
    const { _id } = req.params;
    
    try{
        const newCategory = await blogCategory.create(req.body);
        res.json({
            status: "category succesfully created",
            newCategory,
        })
    } catch (error) {
        throw new Error(error)
    };
});

// update or edith category

const updateBlogCategory = asyncHandler(async(req, res) => {
    const { id } = req.params;
  

    try{
        const updatedcategory = await blogCategory.findByIdAndUpdate(id, req.body,{
          new: true,   
        });
         res.json({message: "blog category sucessfuly updated", updatedcategory})
    } catch (error) {
        throw new Error(error);
    }
})


    // delete category

const deleteBlogCategory = asyncHandler(async(req, res) => {
    const { id } = req.params;
    try{
     const deletedcategory = await blogCategory.findByIdAndDelete(id);
     res.json({message:"Blog category successfully deleted",  deletedcategory});
    } catch (error){
        throw new Error(error);
    };
});

// get a category

const getaBlogCategory = asyncHandler(async(req, res) => {
   const { id } = req.params;
   try{
    validateDBid(id)
    const getone = await blogCategory.findById(id);
    res.json(getone)
   } catch (error){
    throw new Error(error)
   }
});

// get all category

const getallBlogCategory = asyncHandler(async(req, res) => {
    try{
    const gotall = await blogCategory.find();
    res.json({message: "all blog category", gotall});
    } catch (error) {
      throw new Error(error);
    };
});


module.exports = {
    createBlogCategory, 
    updateBlogCategory,
    deleteBlogCategory,
    getaBlogCategory,
    getallBlogCategory,
}