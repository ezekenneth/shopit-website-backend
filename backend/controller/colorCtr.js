const Color = require("../models/colormodel");
const asyncHandler = require("express-async-handler");
const validateDBid =require("../utils/validateDBid");

//create Color

const createColor =  asyncHandler(async(req, res) => {
    const { _id } = req.params;
    
    try{
        const newColor = await Color.create(req.body);
        res.json({
            status: "Color succesfully created",
            newColor,
        })
    } catch (error) {
        throw new Error(error)
    };
});

// update or edith Color

const updateColor = asyncHandler(async(req, res) => {
    const { id } = req.params;
  

    try{
        const updateColor = await Color.findByIdAndUpdate(id, req.body,{
          new: true,   
        });
        res.json({status: "color succesfully updated", 
        updateColor})
    } catch (error) {
        throw new Error(error);
    }
})


    // delete Color

const deleteColor = asyncHandler(async(req, res) => {
    const { id } = req.params;
    try{
     const deleteColor = await Color.findByIdAndDelete(id);
     res.json({message:"Color successfully deleted",  deleteColor});
    } catch (error){
        throw new Error(error);
    };
});

// get a Color

const getaColor = asyncHandler(async(req, res) => {
   const { id } = req.params;
   try{
    validateDBid(id)
    const getone = await Color.findById(id);
    res.json(getone)
   } catch (error){
    throw new Error(error)
   }
});

// get all Color

const getallColor = asyncHandler(async(req, res) => {
    try{
    const getall = await Color.find();
    res.json(getall);
    } catch (error) {
      throw new Error(error);
    };
});


module.exports = {
    createColor, 
    updateColor,
    deleteColor,
    getaColor,
    getallColor,
   
}