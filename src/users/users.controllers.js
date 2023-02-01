//?Genera una promesa que se resolvera en services
const Users = []
let baseID = 1

const getAllUsers = async () => {
    //*como un select * from movies
    //*va a traer todas los usuarios 
    const data = await Users
    return data 
    //return await Users
}

const getUsersByid = async (id) => {
    //const data = await Users.findOne(user => user.id === id)
    const filterUser = await Users.find(user => user.id === id) 
    //*select * from movies where id = id;
    return filterUser
}

const createUsers = async (data) => {
    const newUsers = {
        id: baseID++,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        age: data.age
    }
    await Users.push(newUsers)

    return newUsers
}

const deleteUsers = async (id) => {
    const data = await Users.destroy({
        where:{
            id
        }
    })
    return data
}

module.exports = {
    deleteUsers,
    getAllUsers,
    getUsersByid,
    createUsers
}