const coupon = require("../models/couponmodel")
const validateDBid =require("../utils/validateDBid");
const asyncHandler = require("express-async-handler");

const createCoupon = asyncHandler(async(req, res) => {
    try{

        const newCoupon = await coupon.create(req.body);
        res.json(newCoupon);
    }
    catch (error){
        throw new Error(error)
    }
})

const getAllCoupon = asyncHandler(async(req, res) => {
    try{

        const coupons = await coupon.find();
        res.json(coupons);
    }
    catch (error){
        throw new Error(error)
    }
});

const updateCoupon = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateDBid(id)
    try{

        const updatecoupon = await coupon.findByIdAndUpdate(id, req.body, {
            new:true,
        });
        res.json(updatecoupon);
    }
    catch (error){
        throw new Error(error)
    }
});


const deleteCoupon = asyncHandler(async(req, res) => {
    const {id} = req.params;
    validateDBid(id)
    try{

        const deletecoupon = await coupon.findByIdAndDelete(id);
        res.json(deletecoupon);
    }
    catch (error){
        throw new Error(error)
    }
});


module.exports = {createCoupon, getAllCoupon, updateCoupon, deleteCoupon};