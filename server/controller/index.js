const avtimg = require('../models/user')// 引入模型

module.exports = {
  init: function (req, res, next, view) {
    var userid = req.session.userinfo.user_id;
    avtimg.findOne({_id: userid}, function (err, doc) {
      if (err) {
        throw err
      } else {
        if (doc !== null) {
          res.render(view,{
            img_url: doc.avt_img
          })
        }
      }
    })
  }
}
