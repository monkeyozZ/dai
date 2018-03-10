const avtimg = require('../models/user')// 引入模型
const list = require('../models/adddata')// 引入模型

module.exports = {
  list: function (req, res, next, view) {
    var userid = req.session.userinfo.user_id;
    avtimg.findOne({_id: userid}, function (err, doc) {
      if (err) {
        throw err
      } else {
        if (doc !== null) {
          var _doc = doc
          list.find({},function (err, doc) {
            var listarrr = [];
            if(doc !== null){
              for(let i = 0;i<doc.length;i++){
                listarrr.push(doc[i])
              }
              console.log(listarrr)
              res.render(view,{
                img_url: _doc.avt_img,
                listarr_s: listarrr
                //listarr_b: [doc['name'],doc['sex'],doc['birthday'],doc['phone'],['city']],
              })
            }
          })
        }
      }
    })
  }
}
