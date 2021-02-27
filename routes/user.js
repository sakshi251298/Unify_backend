const express = require('express')
const router = express.Router()
const userdata = require('../models/users')
const { go } = require('../helpers/utils')
const verifyauth = require('./middleware');


router.get('/', verifyauth ,  async (req, res) => {
    
    try {
        console.log(req.user)
        const user = await userdata.find({"_id" : req.user._id})
        if (user == '') {
            res.status("400").json(go(false , "User Error", {
                "Error": "No User available with id"
            }))
        }
            res.status("201").json(go(true,"Logged In User Details",user))
        
        } catch {
            res.status("400").json(go(false,"User Error" , {
                "Error" : "No user data available"
            }))
        }
})


router.post('/register', async (req, res) => {
    const user = new userdata({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        hscdipstream: req.body.hscdipstream,
        degree: req.body.degree,
        degreestream: req.body.degreestream,
        in_sub: req.body.in_sub,
        in_loc: req.body.in_loc,
        in_cgpa: req.body.in_cgpa,
        in_gre: req.body.in_gre,
        in_ilts: req.body.in_ilts,
    })
    console.log(user);
    try {
        
        const newUser = await user.save()
        res.status(200).json(go(true,"User Created",newUser))
    } catch {
        res.status("400").json(go(false,"Registeration Error" , {
            "Error": "Error creating user"
        }))
    }
})


router.post('/logout', verifyauth, calcExpireDate , async (req, res) => {
//  Do something nice
res.send(true);
})


router.delete('/', verifyauth , async (req, res) => {
    const token = req.user;

    try {
        const user = await userdata.findOneAndDelete({ "_id": req.user._id });
        res.status("200").json(go(true,"User deleted",{
            token,
            user
        }))
    } catch {
        res.status("400").json(go(false, "User delete Error", {
            "Error" : "Error deleting user!!"
        }))
    }
    
    // res.redirect('/user')
})

function calcExpireDate(req, res ,next ) {
    Date.prototype.addDays = function (days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };
    var currentDate = new Date();
    var expireDate = currentDate.addDays(1);
    req.expiresDate  = expireDate
    next()
}

module.exports = router