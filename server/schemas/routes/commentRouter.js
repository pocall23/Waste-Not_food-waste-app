const { Router } = require("express");
const Post = require("../models/Post");



Router.post('/post/:id/comment', async (req, res) =>{

    const id = req.params.id;

    const comment = new Comment({
        text: req.body.comment,
        post: id
    })

    await comment.save()

    const postRelated = await Post.findById(id);

    postRelated.comments.push(comment);

    await postRelated.save(function(err){
        if(err) {
            console.log(err)
        }
        res.redirect('/')
    })
})
