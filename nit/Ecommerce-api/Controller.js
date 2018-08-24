
const MongodbService =require('./MongodbService')
const mongodbService = new  MongodbService();

class Controller {
    static async userRegistrationHandler(req,res){
        const payload=req.body;
        const mongodbService=new MongodbService();
        await  mongodbService.init();
        const user=await mongodbService.userRegistration(payload);
        // res.send('Got a POST request');
        res.json(user)
    }
    static async userAuthHandler(req, res) {
        const payload = req.body;

        const mongodbService = new MongodbService();
        await  mongodbService.init();

        // Get user details for given username

        const user = await mongodbService.findUser(payload.username);

        if (user.password === payload.password) {
            res.json(user)
        } else {
            res.json({status: 'Your username or password is incorrect.'})
        }
    }
    static async SalesHandler(req,res){
        const payload=req.body;

        const mongodbService=new MongodbService();
        await  mongodbService.init();
        const sale=await mongodbService.sales(payload);
        // res.send('Got a POST request');
        res.json(sale)

    }

    static async PurchasesHandler(req,res){
        const payload=req.body;

        const mongodbService=new MongodbService();
        await  mongodbService.init();
        const purchase=await mongodbService.purchases(payload);
        // res.send('Got a POST request');
        res.json(purchase)

    }












    static async handleGetUsers(req, res) {
        // Initialize db
        await mongodbService.init()
        // Call getAllUsers to get the users
        const allUsers = await mongodbService.getAllUsers()
        // Return all users
        res.json(allUsers)
    }

    static async handleOneUser(req,res){
        await mongodbService.init()
        const userId = req.params._id;
        const findUser = await mongodbService.getOneUser(userId)
        res.json(findUser)
    }
static async handleGetPurchases(req,res){
        await mongodbService.init()
        const allPurchases=await mongodbService.getAllPurchases()
    res.json(allPurchases)
}
static async handleOnePurchase(req,res){
        await mongodbService.init()
    const purchaseId=req.params._id;
        const findPurchase=await mongodbService.getOnePurchase(purchaseId)
    res.json(findPurchase)
}
    static async handleGetSales(req, res) {
        // Initialize db
        await mongodbService.init()
        // Call getAllUsers to get the users
        const allSales = await mongodbService.getAllSales()
        // Return all users
        res.json(allSales)

    }

    static async handleOneSale(req,res){
        await mongodbService.init()
        const saleId = req.params._id;
        const findsale = await mongodbService.getOneSale(saleId)
        res.json(findSale)
    }

}
module.exports=Controller;


