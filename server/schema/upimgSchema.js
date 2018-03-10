var mongoose = require('mongoose')
var Schema = mongoose.Schema
//创建Schema
var imgSchema = new Schema({
  images: String,
  creatdate: String
})
module.exports = imgSchema
