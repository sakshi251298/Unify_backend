const express = require('express')
const router = express.Router()
const UniversitiesModel = require('../models/universities')

router.get('/', async (req, res) => {
    try {
        const universities = await UniversitiesModel.find({})
        if (universities) {
            res.send(go(true, "Universities", universities))
        }
        else {
            res.status("400").json(go(false , "Universities Info" , {
                'Error' : 'No Data Found'
            }))
        }
    } catch {
        res.status("400").json(go(false , "University Info" , {
            "Error" : "No Data Found"
        }))
    }
})

module.exports = router