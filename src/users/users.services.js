const controllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    controllers.getAllUsers()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({massage: err.message})
        })
}

const postUsers = (req , res) => {
    const data = req.body

        controllers.createUsers(data)
            .then(response => {
                res.status(201).json(response)
            })
            .catch(err  => {
                res.status(404).json({massage: err.massage})
            })
}

const getUsersByid = (req , res) => {
    const {id} = req.params

    controllers.getUsersByid(id)
        .then(data => {
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({massage: 'invalid ID'})
            }
        })
        .catch(err  => {
            res.status(404).json({massage: err.massage})
        })
}

const deleteUsers = (req , res) => {
    const {id} = req.params
    controllers.deleteUsers(id)
        .then((response) => {
            res.status(204).json(response)
        })
        .catch(err  => {
            res.status(404).json({massage: err.massage})
        })
}

module.exports = {
    getAllUsers,
    getUsersByid,
    postUsers,
    deleteUsers
}