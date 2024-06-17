const express = require("express");
const {authmiddleware, isadmin} = require('../middlewares/authmiddleware');
const router = express.Router();
const { 
    createProdCategory, 
    updateProdCategory,
    deleteProdCategory,
    getaProdCategory,
    getallProdCategory,
} = require("../controller/productCategory")



router.post("/add",authmiddleware, isadmin, createProdCategory);
router.put("/:id",authmiddleware, isadmin, updateProdCategory);
router.get("/all", getallProdCategory);
router.get("/:id", getaProdCategory);
router.delete("/:id",authmiddleware, isadmin, deleteProdCategory);





module.exports = router;