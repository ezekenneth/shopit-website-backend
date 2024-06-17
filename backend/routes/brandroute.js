const express = require("express");
const {authmiddleware, isadmin} = require('../middlewares/authmiddleware');
const router = express.Router();
const { 
    createProdBrand, 
    updateProdBrand,
    deleteProdBrand,
    getaProdBrand,
    getallProdBrand,
} = require("../controller/brandcontroller")



router.post("/add",authmiddleware, isadmin, createProdBrand);
router.put("/:id",authmiddleware, isadmin, updateProdBrand);
router.get("/all", getallProdBrand);
router.get("/:id", getaProdBrand);
router.delete("/:id",authmiddleware, isadmin, deleteProdBrand);





module.exports = router;