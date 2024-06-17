const { generateToken } = require("../config/jwttoken");
const userschema = require("../models/usermodel");
const Product = require("../models/productmodel");
const Cart = require("../models/cartmodel");
const Coupon = require("../models/couponmodel");
const Order = require("../models/ordermodel");
const uniqid = require('uniqid'); 
const asyncHandler = require('express-async-handler');
const validateDBid = require("../utils/validateDBid");
const { generateRefreshToken } = require("../config/refreshtoken");
const jwt = require("jsonwebtoken");
const sendEmail = require("./emailcontroller");
const crypto = require("crypto")
const { addAbortListener } = require("nodemailer/lib/xoauth2");
const { log } = require("console");







//register a user

const createUser = asyncHandler (async (req , res) => {
    const email = req.body.email;
    const finduser = await userschema.findOne({email});
         
    if (!finduser){
        //create new user
        const newUser = await userschema.create(req.body);
        res.json(newUser);
    }else{
        //if user already exist
       throw new Error('user already exists')
    };
   
    
});


//user login
 
const loginUser = asyncHandler ( async (req , res) => {
  const {email , password} = req.body;
  //check if user exist or not(invalid credentials)
  const findUser = await userschema.findOne({email});

  if (findUser && (await findUser.isPasswordMatched(password))){
    const refreshToken = await generateRefreshToken(findUser?.id);
    const updateauser = await userschema.findByIdAndUpdate(findUser._id, {
      refreshToken: refreshToken,
    }, {new:true});
    res.cookie('refreshToken', refreshToken,{
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    })
    res.json({
        _id : findUser?._id,
        fullname: findUser?.fullname,
        email: findUser?.email,
        token: generateToken(findUser?._id)
    });
  } else{
    throw new Error('invalid credentials');
  };

});


//admin login
const loginAdmin = asyncHandler ( async (req , res) => {
  const {email , password} = req.body;
  //check if admin exist or not(invalid credentials)
  const findAdmin = await userschema.findOne({email});
  if (findAdmin.role !== 'admin') throw new Error("Not authorised");

  if (findAdmin && (await findAdmin.isPasswordMatched(password))){
    const refreshToken = await generateRefreshToken(findAdmin?.id);
    const updateAdmin = await userschema.findByIdAndUpdate(findAdmin._id, {
      refreshToken: refreshToken,
    }, {new:true});
    res.cookie('refreshToken', refreshToken,{
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    })
    res.json({
        _id : findAdmin?._id,
        fullname: findAdmin?.fullname,
        email: findAdmin?.email,
        token: generateToken(findAdmin?._id)
    });
  } else{
    throw new Error('invalid credentials');
  };

});



//handle refresh token

const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh token in cookies");

  const refreshToken = cookie.refreshToken;

  const user = await userschema.findOne({refreshToken});
  if (!user) throw new Error('no refresh token present or not matched');

  jwt.verify(refreshToken, process.env.JWT_KEY, (err, decoded) => {
    if (err || user.id !== decoded.id){
      throw new Error ("there is something wrong with refresh token");
    }
    const accessToken = generateToken(user?._id);
    res.json({accessToken});
  });
  
});
//logout funtion
const logout = asyncHandler(async(req , res) => {
 const cookie = req.cookies;
 if (!cookie?.refreshToken) throw new Error("No Refresh token in cookies");
 const refreshToken = cookie.refreshToken;
 const user = await userschema.findOne({refreshToken});
 if (!user) {
  res.clearCookie("refreshToken" , {
    httpOnly: true,
    secure: true,
  });
  return res.sendStatus(204); //forbidden
 }
await userschema.findOneAndUpdate(refreshToken);
res.clearCookie("refreshToken" , {
  httpOnly: true,
  secure: true,
});
 res.sendStatus(204); //forbidden
});

//update a user

const updateauser = asyncHandler(async (req , res) => {
  const {_id} = req.user;
  validateDBid(_id);
  try {
    const updateauser = await userschema.findByIdAndUpdate(_id, {
      fullname: req.body?.fullname,
      email : req.body?.email,
      mobile: req.body?.mobile,
    },
    {
      new: true
    }
    );
    res.json(updateauser);
  } catch (error) {
    
    throw new error(error);
  }
});

//save user address

const saveAddress = asyncHandler(async (req, res, next) =>{
  const {_id} = req.user;
  validateDBid(_id);
  try {
    const updateauser = await userschema.findByIdAndUpdate(_id, {
      address: req.body?.address,
    },
    {
      new: true
    }
    );
    res.json(updateauser);
  } catch (error) {
    throw new error(error);
  }
})

//get all users

const getallUsers = asyncHandler(async (req , res) => {
  try {
    const getUsers = await userschema.find();
    res.json(getUsers);

  } catch (error) {
    throw new Error(error)
  }
});

//get a single user by id

const getaUser = asyncHandler (async (req , res)=> {
    const {id} = req.params;
    validateDBid(id);
        try {
        const getaUser = await userschema.findById(id);
        res.json(getaUser)
        
    } catch (error) {
        throw new Error(error);
        
    }
})

//delete a user

const deleteaUser = asyncHandler (async (req , res)=> {
  const {id} = req.params;
  validateDBid(id);
      try {
      const deleteaUser = await userschema.findByIdAndDelete(id);
      res.json(deleteaUser)
      
  } catch (error) {
      throw new Error(error);
      
  }
});

 //block user

 const blockUser = asyncHandler(async (req, res) =>{
 const {id} = req.params;
 validateDBid(id);
 try {
  const blockuser =await userschema.findByIdAndUpdate(id, {isBlocked:true},{new:true});
  res.json(blockuser);
 } catch (error) {
  throw new Error(error);
 }

 });

   //unblock user
 const unblockUser = asyncHandler(async (req, res) =>{
  
  const {id} = req.params;
  validateDBid(id);

  try {
    const unblock = await userschema.findByIdAndUpdate(id, {isBlocked:false},{new:true});
    res.json({
      message: "user Unblocked",
    })
   } catch (error) {
    throw new Error(error);
   }
  
 });

 //user password reset
 const updatePassword = asyncHandler(async (req, res) => {
  try {
      const { _id } = req.user;
      validateDBid(_id);
      const user = await userschema.findById(_id);
      if (req.body && req.body.password) {// Check if req.body.password exists
          user.password = req.body.password; // Update the user's password
          const updatedUser = await user.save(); // Save the updated user
          res.json({message:"password changed"});
      } else {
          res.json({message: "password schema is missing in your db "});
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'encountered problem chan' });
  }
});



const forgotpasswordToken = asyncHandler(async(req , res) => {
  const {email} = req.body;
  const user = await userschema.findOne({email});
  if (!user) throw new Error("user not found with this email");
  try{
    const token = await user.createPasswordResetToken();
    await user.save();
    const resetURL = 'hi, please click this link to reset your password. this link is valid till 10 minutes from now.<a href= http://localhost:6000/api/user/forgot-password/'+token+'>click here</a>'
    const data = {
      to: email,
      text: "Hey user",
      subject: "forgot password link",
      htm: resetURL,
    };
    sendEmail(data);

    res.json(token);

  }
  catch (error) {
    throw new Error(error)
  }
});

//password reset
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  try {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await userschema.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).json({ error: "Token expired or invalid. Please try again." });
    }
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json({ message: "Password reset successful", user });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const getWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user
   try{
      const findUser = await userschema.find(_id).populate("wishlist");
      res.json(findUser);
   } catch (error) {
    throw new Error(error);
   }
});

const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;

  if (!req.user || !req.user._id) {
    return res.status(400).json({ success: false, message: 'User not authenticated' });
}
  const { _id } = req.user;
  
  validateDBid(_id);

  try {
      let products = [];
      const user = await userschema.findById(_id);

      // Check if user already has product in cart
      const alreadyExistCart = await Cart.findOne({ orderby: user._id });
      if (alreadyExistCart) {
          await alreadyExistCart.deleteOne();
      }

      for (let i = 0; i < cart.length; i++) {
          let object = {};
          object.product = cart[i]._id;
          object.count = cart[i].count;
          object.color = cart[i].color;
          let getPrice = await Product.findById(cart[i]._id).select("price").exec();
          object.price = getPrice.price;
          products.push(object);
      }
      let cartTotal = 0;
      for (let i = 0  ; i < products.length; i++){
        cartTotal = cartTotal + products[i].price * products[i].count;
      }

      let newCart = await new Cart({
        products,
        cartTotal,
        orderby: user?._id,
      }).save();
      res.json( newCart );
  } catch (error) {
      throw new Error(error)
  }
});


const getUserCart = asyncHandler(async (req, res) => {

  const { _id } = req.user;

  try {
    validateDBid(_id)
      const cart = await Cart.findOne({ orderby: _id }).populate("products.product");

      res.json(cart);
  } catch (error) {
     throw new Error(error)
  }
});


//empty or clear cart

const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;

  // Validate the ID
   validateDBid(_id)
  try {
      const user = await userschema.findOne({ _id });
      const cart = await Cart.findOneAndRemove({ orderby: user._id });

      res.json(cart);
  } catch (error) {
     res.status(500).json({ message: error.message });
  } 
});

//apply coupon

const applyCoupon = asyncHandler(async (req, res) =>{
  const { coupon } = req.body;
  const { _id } = req.user;
  validateDBid( _id )
  const validcoupon = await Coupon.findOne( { name: coupon } );
  if (validcoupon === null){
    throw new Error("invalid coupon");
  }

  const user = await userschema.findOne({ _id });
   let {cartTotal} = await Cart.findOne({ orderby:user._id }).populate("products.product");
   let totalAfterDiscount = (cartTotal - (cartTotal * validcoupon.discount)/100).toFixed(2); 
   await Cart.findOneAndUpdate({orderby:user._id}, {totalAfterDiscount},{new:true});
   res.json(totalAfterDiscount)
});


//create order
const createOrder = asyncHandler(async (req, res) => {
  const {COD, couponApplied} = req.body;
  const { _id } = req.user;
  validateDBid( _id )

 try {

    if(!COD) throw new Error('create cash order failed');
    const user = await userschema.findById( _id );
    let userCart = await Cart.findOne({orderby: user._id});
    let finalAmount = 0;
    if(couponApplied && userCart.totalAfterDiscount) {
      finalAmount = userCart.totalAfterDiscount
    }else {
      finalAmount = userCart.cartTotal;
    }

    let newOrder = await new  Order({
      products: userCart.products,
      paymentIntent: {
        id :uniqid(),
        method: "COD",
        amount: finalAmount,
        status: "cash on Delivery",
        created: Date.now(),
        currency: "usd",
      },
      orderby: user._id,
      orderStatus: "cash on Delivery"
    }).save();

    let update = userCart.products.map((item) =>{
      return {
        updateOne: {
          filter: { _id:item.product._id },
          update: {$inc: {quantity: -item.count, sold: +item.count}},
        }
      }
    });
    const updated = await Product.bulkWrite(update, {});
    res.json({message: "success"})

 } catch (error){
  throw new Error(error)
 }
});

//getOrder

const getOrders = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateDBid( _id );
  try {

    const userorders = await Order.findOne({orderby: _id}).populate("products.product").exec();
     res.json(userorders)
  } catch(error){
    throw new Error(error);
  }
});

const updateOrderStatus = asyncHandler(async (req, res) => {
  const{ status } = req.body;
  const { id } = req.params;
  validateDBid(id);

  try{

    const updateOrder = await Order.findByIdAndUpdate(
        id, 
        {
          orderStatus: status,
          paymentIntent: {
            status: status,
          },
        },
      {new:true}
    );
    res.json(updateOrder);   

  }catch (error){
    throw new Error(error);
  }
});

module.exports = {
  createUser ,
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
  updateOrderStatus,
};