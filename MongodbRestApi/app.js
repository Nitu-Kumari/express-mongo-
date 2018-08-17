var bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const Controller = require('./Controller');
app.get('/users', Controller.handleGetUsers);
app.get('/users/:id', Controller.handleOneUser);
app.post('/users', Controller.handleAddUser);
app.put('/users/:id', Controller.handlePartialUpdateUser);
app.delete('/users/:id', Controller.handleDeleteUser);
app.listen(4001, function () {
    console.log('Ready');
});

