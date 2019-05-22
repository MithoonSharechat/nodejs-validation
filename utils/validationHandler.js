function saveDataValidationHandler(next, result) {
    if (result.isEmpty()) {
        return;
    } else {
        throw new Error(result.array().map(i => `'${i.param}' has ${i.msg}`).join(''));
    }
}

module.exports = saveDataValidationHandler;