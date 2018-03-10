var mongoose = require('mongoose')
var Schema = mongoose.Schema
//创建Schema
var dataSchema = new Schema({
  name: String,
  money: String,
  sex: String,
  birthday: String,
  phone: String,
  city: String,
  baodan: String,
  home: String,
  car: String,
  job: String,
  worktime: String,
  wagesway: String,
  incomerange: String,
  gongjijing: String,
  license: String,
})

module.exports = dataSchema
