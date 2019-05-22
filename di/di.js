var postController = require('../controllers/postController');
var validationHandler = require('../utils/validationHandler');
var validator = require('../validator/validator');
const { createContainer, asValue } = require('awilix');
const container = createContainer();

container.register({
    validationHandler: asValue(validationHandler),
    validator: asValue(validator)
});

var postController = new postController.postControllerConstructor(container.resolve("validationHandler"));


console.log("checking the postController");
container.register({
   postController: asValue(postController)
});

module.exports = container;