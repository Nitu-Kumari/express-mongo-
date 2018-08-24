const mongodb=require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'demo-db';
class MongodbService {
    async init(){
        const MongoClient=mongodb.MongoClient;
        const client=await MongoClient.connect(url);
        this.db=client.db(dbName);
    }
    async userRegistration(payload) {

        const result = await this.db.collection('users').findOneAndUpdate({
            username: payload.username,
        }, {
            $set: payload
        }, {
            upsert: true,
        });

        // Return data
        const user = await this.db.collection('users').findOne({ username: payload.username });
        return user;
    }
    async findUser(username){

        // return data
        const user=await this.db.collection('users').findOne({username});
        return user;


    }


    async sales(payload){
        const result = await this.db.collection('sales').findOneAndUpdate({
         name:payload.name,
        }, {
            $setOnInsert: { dateAdded: new Date() },
            $set:payload,

        }, {
            upsert: true,
        });
        // Return data
        const sale = await this.db.collection('sales').findOne({ name: payload.name});
        return sale;

    }


    async purchases(payload){
        const result = await this.db.collection('purchases').findOneAndUpdate({
            sale:payload.sale,
        }, {

            $set:payload,

        }, {
            upsert: true,
        });
        // Return data
        const purchase = await this.db.collection('purchases').findOne({ sale: payload.sale});
        return purchase;

    }

































    async getAllUsers(){
        const allUsers = await this.db.collection('users').find({}).toArray();
        return   allUsers;
    }

    async getOneUser(userId){
        const findUser = await this.db.collection('users').findOne({_id: ObjectId(userId)});
        return findUser;
    }
    async getAllPurchases(){
        const allPurchases=await  this.db.collection('purchases').find({}).toArray();
return allPurchases;
    }
    async getOnePurchase(purchaseId){
        const findPurchase=await this.db.collection('purchases').findOne({_id:ObjectId(purchaseId)});
        return findPurchase;
    }

    async getAllSales(){
        const allSales = await this.db.collection('sales').find({}).toArray();
        return   allSales;
    }
    async getOneSale(saleId){
        const findSale = await this.db.collection('sales').findOne({_id: ObjectId(saleId)});
        return findSale;
    }



}
module.exports=MongodbService;