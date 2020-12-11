const jwt = require('jsonwebtoken')

async function verifyauth(req, res, next) {
    const token = req.header('auth-token')
    if (!token) {
        return res.status("401").json(go(false,'Access Denied'))
    }
    
    try {
        const verified = await jwt.verify(token, '5mnfvco4@9090')
        req.user = verified
        next()
    } catch {
        res.status("401").json(go(false , {
            "msg": "Invalid Token"
        }))
    }

}

module.exports = verifyauth;