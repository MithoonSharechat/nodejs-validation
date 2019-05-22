function postController (validationHandler){
    this.saveDatavalidationHandler = validationHandler;
    this.saveData  = (req, res, next) =>{
        req.getValidationResult()
            .then((validationResult) => {
                return this.saveDatavalidationHandler(next, validationResult);
            })
            .then(()=>{
                res.send("data saved successfully");
            })
            .catch(next);
    }

}
exports.postControllerConstructor = postController;
