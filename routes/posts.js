const express = require('express');
const postsRouter =  express.Router();

// import post model
const Post = require('../models/Posts')

//add a new post
postsRouter.post('', (req,res)=>{
    // req.body gets the payload and then we save it to the mongodb database
    const post = new Post(req.body)
    post.save()
        .then(data=>res.status(201).json(data))
        .catch(err=>res.json({message:err}))
    
})


// get all posts
postsRouter.get('',(req,res)=>{
    Post.find((error,books)=>{
        if(error){
            return res.json({'message':error})
        }
        return res.status(200).json(books)
    })
    // res.json({message:'You are accessing the posts'})
})

// get a single post
postsRouter.get('/:id', (req,res)=>{
    Post.findById(req.params.id,(error,post)=>{
        if(error){
            return res.json({message:error})
        }
        return res.status(200).json(post)
    })
})



// delete a post
postsRouter.delete('/:id', (req,res)=>{
    Post.remove({_id:req.params.id})
        .then(()=>res.status(200).json({message:'record has successfully been deleted'}))
        .catch(err=>res.json({message:err}))
})


module.exports = postsRouter