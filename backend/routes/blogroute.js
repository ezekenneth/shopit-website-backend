const express = require("express");
const {
     createBlog, 
     updateBlog, 
     getBlog, 
     getallblog, 
     deletBlog, 
     likeBlog,
     dislikeBlog,
     uploadImages,

    } = require("../controller/blogcontroller");
const { authmiddleware, isadmin } = require("../middlewares/authmiddleware");
const { blogImgResize, uploadphoto } = require("../middlewares/uploadimages");
const router = express.Router();


//Blog routes
router.post("/", authmiddleware, isadmin , createBlog); 
router.put("/upload/:id", authmiddleware, isadmin, uploadphoto.array('images',2),blogImgResize, uploadImages)
router.put("/:id/likes",authmiddleware, likeBlog); 
router.put("/:id/dislikes",authmiddleware, dislikeBlog); 
router.put("/:id", authmiddleware, isadmin , updateBlog);
router.put("/likes",authmiddleware, likeBlog); 
router.get("/:id", getBlog); 
router.get("/", getallblog); 
router.delete("/:id",authmiddleware, isadmin, deletBlog); 
router.put("/likes",authmiddleware, likeBlog); 

module.exports = router;