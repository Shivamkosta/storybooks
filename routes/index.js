const express = require("express");
const {ensureAuth,ensureGuest} = require('../middlewares/auth');
const Story = require('../models/story');

const router = express.Router();

// @desc  Login/Landing page
// @route GET /

router.get('/',ensureGuest,(req,res)=>{
    res.render('login',{
        layout: 'login'
    });
})

// @desc  Login/Landing page
// @route GET /dashboard
router.get('/dashboard',ensureAuth,async(req,res)=>{

    try{
        const stories = await Story.find({ user: req.user.id }).lean()
        res.render('dashboard',{
            name: req.user.firstName,
            stories
        });
    }catch(err){
        console.log("Error",err);
        res.render('error/500');
    }
    // console.log("req.user :",req.user);
   
})

module.exports = router;