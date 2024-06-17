
const express = require('express');
const { createUser,
        loginUser, 
        getallUsers,
        getaUser, 
        deleteaUser, 
        updateauser, 
        blockUser, 
        unblockUser,
        handleRefreshToken,
        logout,
        updatePassword,
        forgotpasswordToken,      
        resetPassword,
        loginAdmin,
        getWishlist,
        saveAddress,
        userCart,
        getUserCart,
        emptyCart,
        applyCoupon,
        createOrder,
        getOrders,
        updateOrderStatus
 } = require('../controller/usercontroller');
const {authmiddleware, isadmin} = require('../middlewares/authmiddleware');
const router = express.Router();

//refresh token
router.get("/refresh", handleRefreshToken);
//login and register routes

router.post("/register", createUser);
router.post("/admin-login", loginAdmin);
router.post("/login", loginUser);

router.post("/cart",authmiddleware, userCart);
router.post("/cart/applycoupon",authmiddleware, applyCoupon);
router.post("/cart/cash-order",authmiddleware, createOrder);
//recover password
router.post("/forgot-password", forgotpasswordToken);
//forgot password
router.put("/forgot-password/:token", resetPassword);
//change password
router.put("/password",authmiddleware, updatePassword);
//update order status
router.put("/order/update-order/:id",authmiddleware,isadmin, updateOrderStatus);
//logout
router.get("/logout", logout);

router.get("/wishlist",authmiddleware, getWishlist);

router.get("/cart",authmiddleware, getUserCart);
//get all users routes

router.get("/all-users", getallUsers);

router.get("/get-orders",authmiddleware, getOrders);

//get a user by id
router.get("/:id",authmiddleware,isadmin, getaUser);

router.delete("/empty-cart",authmiddleware, emptyCart);

//delete a user by id
router.delete("/:id", deleteaUser);


//update a user by id
router.put("/edith-user",authmiddleware, updateauser);

router.put("/save-address",authmiddleware, saveAddress);

//block user routes
router.put("/block-user/:id",authmiddleware,isadmin, blockUser);

//unblock user routes
router.put("/unblock-user/:id",authmiddleware,isadmin, unblockUser);



module.exports =router;