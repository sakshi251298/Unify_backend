const express = require('express')
const router = express.Router()
const userdata = require('../models/users')
const { go } = require('../helpers/utils')
const loginRouter = require('./login')
const userRouter = require('./user')
const universitiesRouter = require('./universities')
const verifyauth = require('./middleware');

router.use('/login', loginRouter)
router.use('/users', userRouter)
router.use('/universities', verifyauth , universitiesRouter)

router.get('/', async (req, res) => {

    try {
        const user = await userdata.find({})
        res.status("200").json(go(true, "All Users", user))

    } catch {
        res.status("400").json(go(false , "Error " , {
            "Error": "No user data available"
        }))
    }
})

module.exports = router