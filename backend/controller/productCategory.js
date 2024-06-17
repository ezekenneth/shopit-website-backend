const prodCategory = require("../models/productCategory");
const asyncHandler = require("express-async-handler");
const validateDBid =require("../utils/validateDBid");

//create category

const createProdCategory =  asyncHandler(async(req, res) => {
    const { _id } = req.params;
    
    try{
        const newCategory = await prodCategory.create(req.body);
        res.json({
            status: "category succesfully created",
            newCategory,
        })
    } catch (error) {
        throw new Error(error)
    };
});

// update or edith category

const updateProdCategory = asyncHandler(async(req, res) => {
    const { id } = req.params;
  

    try{
        const updatecategory = await prodCategory.findByIdAndUpdate(id, req.body,{
          new: true,   
        });
         res.json(updatecategory)
    } catch (error) {
        throw new Error(error);
    }
})


    // delete category

const deleteProdCategory = asyncHandler(async(req, res) => {
    const { id } = req.params;
    try{
     const deletecategory = await prodCategory.findByIdAndDelete(id);
     res.json({message:"category successfully deleted",  deletecategory});
    } catch (error){
        throw new Error(error);
    };
});

// get a category

const getaProdCategory = asyncHandler(async(req, res) => {
   const { id } = req.params;
   try{
    validateDBid(id)
    const getone = await prodCategory.findById(id);
    res.json(getone)
   } catch (error){
    throw new Error(error)
   }
});

// get all category

const getallProdCategory = asyncHandler(async(req, res) => {
    try{
    const getall = await prodCategory.find();
    res.json(getall);
    } catch (error) {
      throw new Error(error);
    };
});


module.exports = {
    createProdCategory, 
    updateProdCategory,
    deleteProdCategory,
    getaProdCategory,
    getallProdCategory,
   
}