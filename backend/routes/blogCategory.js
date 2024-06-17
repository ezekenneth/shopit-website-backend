const express = require("express");
const {authmiddleware, isadmin} = require('../middlewares/authmiddleware');
const router = express.Router();
const { 
    createBlogCategory, 
    updateBlogCategory,
    deleteBlogCategory,
    getaBlogCategory,
    getallBlogCategory,
} = require("../controller/blogCategory")



router.post("/add",authmiddleware, isadmin, createBlogCategory);
router.put("/:id",authmiddleware, isadmin, updateBlogCategory);
router.get("/all", getallBlogCategory);
router.get("/:id", getaBlogCategory);
router.delete("/:id",authmiddleware, isadmin, deleteBlogCategory);





module.exports = router;