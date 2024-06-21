const express = require("express");
const {authmiddleware, isadmin} = require('../middlewares/authmiddleware');
const router = express.Router();
const { 
    createContact, 
    updateContact,
    deleteContact,
    getaContact,
    getallContact,
} = require("../controller/contactCtr")



router.post("/add", createContact);
router.put("/:id",authmiddleware, isadmin, updateContact);
router.get("/all", getallContact);
router.get("/:id", getaContact);
router.delete("/:id",authmiddleware, isadmin, deleteContact);





module.exports = router;