
const asyncHandler = require("express-async-handler");
const validateDBid =require("../utils/validateDBid");
const Contact = require("../models/Contactmodel")

//create Contact

const createContact =  asyncHandler(async(req, res) => {
    const { _id } = req.params;
    
    try{
        const newContact = await Contact.create(req.body);
        res.json({
            status: "Contact succesfully created",
            newContact,
        })
    } catch (error) {
        throw new Error(error)
    };
});

// update or edith Contact

const updateContact = asyncHandler(async(req, res) => {
    const { id } = req.params;
  

    try{
        const updateContact = await Contact.findByIdAndUpdate(id, req.body,{
          new: true,   
        });
        res.json({status: "Contact succesfully updated", 
        updateContact})
    } catch (error) {
        throw new Error(error);
    }
})


    // delete Contact

const deleteContact = asyncHandler(async(req, res) => {
    const { id } = req.params;
    try{
     const deleteContact = await Contact.findByIdAndDelete(id);
     res.json({message:"Contact successfully deleted",  deleteContact});
    } catch (error){
        throw new Error(error);
    };
});

// get a Contact

const getaContact = asyncHandler(async(req, res) => {
   const { id } = req.params;
   try{
    validateDBid(id)
    const getone = await Contact.findById(id);
    res.json(getone)
   } catch (error){
    throw new Error(error)
   }
});

// get all Contact

const getallContact = asyncHandler(async(req, res) => {
    try{
    const getall = await Contact.find();
    res.json(getall);
    } catch (error) {
      throw new Error(error);
    };
});


module.exports = {
    createContact, 
    updateContact,
    deleteContact,
    getaContact,
    getallContact,
   
}