const Blog = require("../models/blogmodel");
const User = require("../models/usermodel");
const asyncHandler = require("express-async-handler");
const validateDBid =require("../utils/validateDBid");
const cloudinaryuploadImg = require("../utils/cloudinary")
const fs = require('fs')


//create blog

const createBlog = asyncHandler(async (req, res) =>{
    try{
        const newBlog = await Blog.create(req.body);
        res.json({
            status: "Blog succesfully created",
            newBlog,
        })
    } catch (error) {
        throw new Error(error)
    };

});

//update blog

const updateBlog = asyncHandler(async(req, res) => {
    const { id } = req.params;
    validateDBid(id)
    try{
        const updateblog = await Blog.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.json(updateblog)
    }catch (error) {
        throw new Error(error)
    };
});

//get a blog

const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDBid(id)
    try {
        const getblog = await Blog.findById(id).populate("likes").populate("dislikes");
        const updatedviews = await Blog.findByIdAndUpdate(id, {
            $inc: { numviews: 1 }
        }, {
            new: true,
        });
        res.json(getblog);
    } catch (error) {
        throw new Error(error);
    }

});

//get all blogs

const getallblog = asyncHandler(async(req, res) =>{
    const id = req.params;
     try{
        const getallBlog  =  await Blog.find(id);
        res.json(getallBlog)
     }catch (error) {
        throw new Error(error)
     };
});


// delete blog

const deletBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDBid(id);
    try{
        const deletedBlog = await Blog.findByIdAndDelete(id);
        res.json({message: "blog sucessfully deleted", deletedBlog});
    }catch (error) {
        throw new Error(error);
    }
});

//like a blog post
const likeBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDBid(id);
  
    try {
      // Find blog post to like
      const blog = await Blog.findById(id);
  
      if (!blog) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
  
      // Find the login user
      const loginUserId = req?.user?._id;
  
      // Find if the user already disliked the post
      const alreadyDisliked = blog?.dislikes.find(
        (userId) => userId.toString() === loginUserId?.toString()
      );
  
      if (alreadyDisliked) {
        // User has already disliked, remove from dislikes
        const updatedBlog = await Blog.findByIdAndUpdate(
          id,
          {
            $pull: { dislikes: loginUserId },
            isDisliked: false,
          },
          { new: true }
        );
        res.json(updatedBlog);
      } else {
        const isLiked = blog?.likes.includes(loginUserId);
  
        if (isLiked) {
          // User has already liked, remove from likes
          const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            {
              $pull: { likes: loginUserId },
              isLiked: false,
            },
            { new: true }
          );
          res.json(updatedBlog);
        } else {
          // User hasn't liked, add to likes
          const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            {
              $push: { likes: loginUserId },
              isLiked: true,
            },
            { new: true }
          );
          res.json(updatedBlog);
        }
      }
    } catch (error) {
      console.error('Error in likeBlog:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  


  //dislike blog post

  const dislikeBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDBid(id);
  
    try {
      // Find blog post to dislike
      const blog = await Blog.findById(id);
  
      if (!blog) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
  
      // Find the login user
      const loginUserId = req?.user?._id;
  
      // Find if the user already liked the post
      const alreadyLiked = blog?.likes.find(
        (userId) => userId.toString() === loginUserId?.toString()
      );
  
      if (alreadyLiked) {
        // User has already disliked, remove from dislikes
        const updatedBlog = await Blog.findByIdAndUpdate(
          id,
          {
            $pull: {likes: loginUserId },
            isLiked: false,
          },
          { new: true }
        );
        res.json(updatedBlog);
      } else {
        const isDisliked = blog?.dislikes.includes(loginUserId);
  
        if (isDisliked) {
          // User has already disliked, remove from dislikes
          const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            {
              $pull: { dislikes: loginUserId },
              isDisliked: false,
            },
            { new: true }
          );
          res.json(updatedBlog);
        } else {
          // User hasn't disliked, add to dislikes
          const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            {
              $push: { dislikes: loginUserId },
              isDisliked: true,
            },
            { new: true }
          );
          res.json(updatedBlog);
        }
      }
    } catch (error) {
      console.error('Error in dislikeBlog:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  const uploadImages = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateDBid(id);

    try {
        const uploader = (path) => cloudinaryuploadImg(path, "images");
        const urls = [];
        const files = req.files;

        for (const file of files) {
            const { path } = file;
            const newpath = await uploader(path);
            urls.push(newpath);
            fs.unlinkSync(path)
        }

        const findBlog = await Blog.findByIdAndUpdate(
            id,
            {
                images: urls.map((file) => {
                    return file;
                }),
            },
            {
                new: true,
            }
        );

        res.json(findBlog);
    } catch (error) {
        console.error(error);
        throw new Error(error)        
    }
});
  
  
  






module.exports = {
    createBlog,
    updateBlog,
    getBlog,
    getallblog,
    deletBlog,
    likeBlog,
    dislikeBlog,
    uploadImages,
 }