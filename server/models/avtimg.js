var mongoose = require('mongoose');
var imgSchema = require('../schema/upimgSchema');

//mongoose会自动改成复数，如模型名：xx―>xxes, kitten―>kittens, money还是money
var avtimg = mongoose.model('avt',imgSchema);
module.exports = avtimg;
