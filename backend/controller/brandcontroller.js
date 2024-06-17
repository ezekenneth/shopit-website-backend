const prodBrand = require("../models/brandmodel");
const asyncHandler = require("express-async-handler");
const validateDBid =require("../utils/validateDBid");

//create Brand

const createProdBrand =  asyncHandler(async(req, res) => {
    const { _id } = req.params;
    
    try{
        const newBrand = await prodBrand.create(req.body);
        res.json({
            status: "Brand succesfully created",
            newBrand,
        })
    } catch (error) {
        throw new Error(error)
    };
});

// update or edith Brand

const updateProdBrand = asyncHandler(async(req, res) => {
    const { id } = req.params;
  

    try{
        const updateBrand = await prodBrand.findByIdAndUpdate(id, req.body,{
          new: true,   
        });
         res.json(updateBrand)
    } catch (error) {
        throw new Error(error);
    }
})


    // delete Brand

const deleteProdBrand = asyncHandler(async(req, res) => {
    const { id } = req.params;
    try{
     const deleteBrand = await prodBrand.findByIdAndDelete(id);
     res.json({message:"Brand successfully deleted",  deleteBrand});
    } catch (error){
        throw new Error(error);
    };
});

// get a Brand

const getaProdBrand = asyncHandler(async(req, res) => {
   const { id } = req.params;
   try{
    validateDBid(id)
    const getone = await prodBrand.findById(id);
    res.json(getone)
   } catch (error){
    throw new Error(error)
   }
});

// get all Brand

const getallProdBrand = asyncHandler(async(req, res) => {
    try{
    const getall = await prodBrand.find();
    res.json(getall);
    } catch (error) {
      throw new Error(error);
    };
});


module.exports = {
    createProdBrand, 
    updateProdBrand,
    deleteProdBrand,
    getaProdBrand,
    getallProdBrand,
   
}