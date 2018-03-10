var express = require('express')
var router = express.Router()
var loginController = require('../controller/login')
var uploadimg = require('../controller/avt')
var index = require('../controller/index')
var adddata = require('../controller/step')
var listController = require('../controller/list')

/* GET login page. */
router.get('/', function (req, res, next) {
  loginController.checkLogin(req,res, next)
  res.render('login')
})
//首页
router.get('/index', function (req, res, next) {
  index.init(req, res, next, 'index')
  //res.render('index')
})

//登录
router.post('/login',function(req, res, next){
  loginController.Login(req,res, next)
})

//更换头像
router.get('/user_set',function (req, res, next) {
  index.init(req, res, next, 'avt_up')
  //res.render('avt_up')
})

/*router.get('/user_set2',function (req, res, next) {
  res.render('avtupload')
})*/

//上传头像
router.post('/up_img',function (req, res, next) {
  uploadimg.up(req, res, next)
})

//提交数据
router.post('/step_1',function (req, res, next) {
  adddata.adddata(req, res, next)
})

router.post('/step_2',function (req, res, next) {
  adddata.adddata_2(req, res, next)
})

//
router.get('/list',function (req, res, next) {
  //index.init(req, res, next, 'list')
  listController.list(req, res, next, 'list')
})


module.exports = router
