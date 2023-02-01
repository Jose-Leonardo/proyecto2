const router = require('express').Router()
const services = require('./users.services')

//* este es el prefijo : /movies

router.get('/users', services.getAllUsers)//? /movies/
router.post('/users', services.postUsers)//? /movies/

router.get('/users/:id', services.getUsersByid)//? /movies/:id
router.delete('/users/:id', services.deleteUsers)//? /movies/:id

module.exports = router 