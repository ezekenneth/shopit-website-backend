const express = require("express");
const { createProduct,
     getaProduct, 
     updateproduct, 
     deleteproduct,
     getallproduct,
     addToWishlist,
     rating,
     uploadImages,
     deleteImages, 
    } = require("../controller/productcontroller");
const {authmiddleware, isadmin} = require('../middlewares/authmiddleware');
const { uploadphoto, productImgResize } = require("../middlewares/uploadimages");
const router = express.Router();


router.post("/add-product", authmiddleware, isadmin, createProduct);
router.put("/upload/", authmiddleware, isadmin, uploadphoto.array('images',10),productImgResize, uploadImages)
router.get("/:id", getaProduct);
router.put("/wishlist", authmiddleware, addToWishlist);
router.put("/rating", authmiddleware, rating);
router.put("/:id", authmiddleware, isadmin, updateproduct);
router.delete("/:id", authmiddleware, isadmin, deleteproduct);
router.delete("/delete-image/:id", authmiddleware, isadmin, deleteImages);
router.get("/", getallproduct);


module.exports =router;