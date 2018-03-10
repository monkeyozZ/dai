
const avtimg = require('../models/user')// 引入模型

module.exports = {
  up: function (req, res, next) {
    var userid = req.session.userinfo.user_id;
    //console.log(userid)
    avtimg.update({_id: userid}, {$set: {avt_img: req.body.image}}, function (err) {
      if (err) {
        throw err
      } else {
        avtimg.findOne({_id: userid}, function (err, doc) {
          if (err) {
            throw err
          } else {
            if (doc !== null) {
              res.send({data: doc.avt_img, status: 0})
            }
          }
        })
      }
    })
  }
}
