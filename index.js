var express =  require('express');
var app = express();
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var container = require('./di/di');
var port = 8082;

app.use(bodyParser.json());
app.use(expressValidator());

app.post('/saveData', container.resolve('validator').validate(), container.resolve('postController').saveData);

app.listen(port, ()=> {
    console.log("server started at port: ", port);
})