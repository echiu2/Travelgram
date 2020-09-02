const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1]
    if (token === 'null') return res.sendStatus(401)

    const userId = jwt.verify(token, process.env.JWT_KEY)
    req.userId = userId
    next()
}

module.exports = { authenticateToken }