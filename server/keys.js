if(process.env.NODE_ENV === 'production'){
    module.exports = require('./config/prodKeys')
} else {
    module.exports = require('./config/devKeys')
}