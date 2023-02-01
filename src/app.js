//* npm init --y `npm i express` `npm i –D nodemon`
const express = require('express')
const UsersRouter = require('./users/users.router')
const app = express()
app.use(express.json())

const port = 9000

app.use('/api/v1', UsersRouter) //*desde Users.router.js

//*-------------------------------------------
app.get('/', (req, res) =>{
    res.status(200).json({mesage:"todo bien"})
})

app.listen(port, () => {
    console.log(`server start at: http://localhost:${port}`)
})

module.exports = app
