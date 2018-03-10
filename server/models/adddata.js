var mongoose = require('mongoose');
var dataSchema = require('../schema/adddataSchema');

//mongoose会自动改成复数，如模型名：xx―>xxes, kitten―>kittens, money还是money
var adddata = mongoose.model('info',dataSchema);
module.exports = adddata;
