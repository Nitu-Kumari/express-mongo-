const express=require('express');
const bodyParser=require('body-parser');
const Controller=require('./Controller');
const app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.post('/users/registration',Controller.userRegistrationHandler);
app.post('/users/auth',Controller.userAuthHandler);
app.post('/sales',Controller.SalesHandler);

app.post('/purchases',Controller.PurchasesHandler);

app.get('/users', Controller.handleGetUsers);
app.get('/users/._id', Controller.handleOneUser);
app.get('/purchases',Controller.handleGetPurchases);
app.get('/purchases/._id',Controller.handleOnePurchase);
app.get('/sales',Controller.handleGetSales);
app.get('/sales/._id', Controller.handleOneSale);


app.listen(4001,()=> console.log('server is started on  4001'))