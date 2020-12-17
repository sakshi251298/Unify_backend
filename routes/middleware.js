const jwt = require('jsonwebtoken')

async function verifyauth(req, res, next) {
    const token = req.header('auth-token')
    if (!token) {
        return res.status("401").json(go(false,'Access Denied'))
    }
    
    try {
        const verified = await jwt.verify(token, 'sak@h3i4rdW2w4')
        req.user = verified
        next()
    } catch {
        res.status("401").json(go(false , {
            "msg": "Invalid Token"
        }))
    }

}

module.exports = verifyauth;