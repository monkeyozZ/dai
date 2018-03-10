const step_data = require('../models/adddata')// 引入模型
module.exports = {
  adddata: function (req, res, next) {
    step_data.create({
      name: req.body.step_1_data.name,
      money: req.body.step_1_data.money,
      sex: req.body.step_1_data.sex,
      birthday: req.body.step_1_data.birthday,
      phone: req.body.step_1_data.phone,
      city: req.body.step_1_data.city
    },function (err, doc) {
      if(err){
        throw err
      }else {
        //console.log(doc)
        if(doc!==null){
          req.session.pro_id = doc._id
          res.send('插入数据成功')
        }
      }
    })
  },
  adddata_2: function (req, res, next) {
    console.log(req.body)
    let pro_id = req.session.pro_id
    step_data.update({_id: pro_id},
      {$set: {
        baodan: req.body.step_2_data.baodan,
        home: req.body.step_2_data.home,
        car: req.body.step_2_data.car,
        job: req.body.step_2_data.job,
        worktime: req.body.step_2_data.worktime,
        wagesway: req.body.step_2_data.wagesway,
        incomerange: req.body.step_2_data.incomerange,
        gongjijing: req.body.step_2_data.gongjijing,
        license: req.body.step_2_data.license,
      }}, function (err, doc) {
      if(err){
        throw err
      }else{
        if(doc!==null){
          //req.session.pro_id = doc._id
          res.send('插入数据成功')
        }
      }
    })
  }
}
