const express = require("express");
const {authmiddleware, isadmin} = require('../middlewares/authmiddleware');
const router = express.Router();
const { 
    createColor, 
    updateColor,
    deleteColor,
    getaColor,
    getallColor,
} = require("../controller/colorCtr")



router.post("/add",authmiddleware, isadmin, createColor);
router.put("/:id",authmiddleware, isadmin, updateColor);
router.get("/all", getallColor);
router.get("/:id", getaColor);
router.delete("/:id",authmiddleware, isadmin, deleteColor);





module.exports = router;