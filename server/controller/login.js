const encryption = require('password')
const user = require('../models/user')// 引入模型

module.exports = {
  Login: function (req, res, next) {
    user.findOne({
      username: req.body.username,
      password: encryption.getSha1(req.body.password)
    }, function (err, doc) {
      if (err) {
        res.send('server or db error')
      } else {
        if (doc === null) {
          res.send('用户名或密码有误')
        } else {
          var userinfo = {
            islogin: true,
            user_id: doc._id,
            user: doc.username
          }
          req.session.userinfo = userinfo
          res.redirect('index')
        }
      }
    })
  },
  checkLogin: function (req, res, next) {
    var logininfo = req.session.userinfo
    if (logininfo) {
      res.redirect('index')
    }
    //console.log(logininfo)
  }
}
