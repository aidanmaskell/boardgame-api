const validateName = (name) => {
    if (name) {
        if(name.length < 100) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

module.exports.validateName = validateName