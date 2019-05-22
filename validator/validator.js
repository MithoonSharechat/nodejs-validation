const {body} = require('express-validator/check');

var validate  = () => {
           var result =  [
              body('name', 'name does not exists').exists(),
              body('city', "city name does not exists").exists(),
              body('role', "role does not exists").exists()
            ];
           return result;
}

module.exports.validate = validate;