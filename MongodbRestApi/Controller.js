const MongodbService =require('./MongodbService')
const mongodbService = new  MongodbService();

class Controller {
    static async handleGetUsers(req, res) {
        await mongodbService.init()

        const allUsers = await mongodbService.getAllUsers()
        res.json(allUsers)
    }
    static async handleOneUser(req,res){
        await mongodbService.init()
        const userId = req.params.id;
        const findUser = await mongodbService.getOneUser(userId)
        res.json(findUser)
    }

    static async handleAddUser(req,res){
        const userObject =req.body
        await mongodbService.init()
        const newUser= await mongodbService.addUser(userObject)
        res.json(newUser)
    }

    static async handlePartialUpdateUser(req,res){
        await mongodbService.init()
        const userId=req.params.id
        const userObject= req.body
        const updatedUser= await mongodbService.updateUser(userId, userObject)
        res.json(updatedUser)
    }

    static async handleDeleteUser(req,res){
        await mongodbService.init()
        const userId = req.params.id;
        const deleteUser= await mongodbService.deleteUser(userId)
        res.json(deleteUser)
    }
}
module.exports = Controller;