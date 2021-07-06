const mongoose = require('mongoose');

// linha usada para o warning que aparece devido ao Mongoose ser a versão 4 e não irá suportar mais Promise
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/mymoney');