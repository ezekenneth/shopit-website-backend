const express = require("express");
const { createCoupon, getAllCoupon, updateCoupon, deleteCoupon } = require("../controller/couponCtr");
const { authmiddleware, isadmin } = require("../middlewares/authmiddleware");
const router = express.Router();

router.post("/",authmiddleware,isadmin,createCoupon);
router.get("/all",authmiddleware,isadmin,getAllCoupon);
router.put("/:id",authmiddleware,isadmin,updateCoupon);
router.delete("/:id",authmiddleware,isadmin,deleteCoupon);
module.exports = router