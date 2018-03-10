var mongoose = require('mongoose')
var Schema = mongoose.Schema
//创建Schema
var userSchema = new Schema({
  username: String,
  password: String,
  avt_img: String,
  creatdate: String
})

module.exports = userSchema
