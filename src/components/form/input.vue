<template>
  <div>
    <el-form class="myform">
      <div class="demo-input-suffix form-list">
        <el-row type="flex" justify="center" v-show="true">
          <el-col :span="6"><label class="input-name">贷款金额：</label></el-col>
          <el-col :span="14">
            <el-form-item>
              <el-input
                placeholder="请输入贷款金额（万元）"
                prefix-icon="iconfont icon-jine"
                v-model="infodata.money"
                @blur="vmoney"
                clearable
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" v-show="true">
          <el-col :span="6"><label class="input-name">姓名：</label></el-col>
          <el-col :span="14">
            <el-form-item>
              <el-input
                placeholder="请输入姓名"
                prefix-icon="iconfont icon-xingming"
                v-model="infodata.name"
                @blur="vname"
                clearable
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" class="sex_box" v-show="true">
          <el-col :span="6"><label class="input-name">性别：</label></el-col>
          <el-col :span="14">
            <el-form-item>
              <el-radio-group size="medium" v-model="infodata.sex">
                <el-radio-button label="男" name="sex"></el-radio-button>
              </el-radio-group>

              <el-radio-group size="medium" v-model="infodata.sex">
                <el-radio-button label="女" name="sex"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" v-show="true">
          <el-col :span="6"><label class="input-name">年龄：</label></el-col>
          <el-col :span="14">
            <el-form-item>
              <el-input
                placeholder="请输入年龄"
                prefix-icon="iconfont icon-nianling"
                id="date"
                @blur="vbirthday"
                @change="setbirthday"
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" v-show="true">
          <el-col :span="6"><label class="input-name">手机号码：</label></el-col>
          <el-col :span="14">
            <el-form-item>
              <el-input
                placeholder="请输入手机号码"
                prefix-icon="iconfont icon-shouji"
                :maxlength="11"
                v-model="infodata.phone"
                @blur="vphone"
                clearable
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center" v-show="true">
          <el-col :span="6"><label class="input-name">常驻城市：</label></el-col>
          <el-col :span="14">
            <el-form-item>
              <el-input
                placeholder="请选择城市"
                prefix-icon="iconfont icon-zhuzhi"
                @change="setcity"
                @blur="vcity"
                id="area"
              >
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form-item class="zx">
            <el-checkbox-group v-model="infodata.zx">
              <el-checkbox>同意免费领取平安100万赠险</el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item class="xieyi">
            <el-checkbox-group v-model="infodata.xieyi">
              <el-checkbox>我已阅读并同意<a href="javascript:;" @click="xieyishow = true">《XXXXX协议》</a></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="button-box">
        <el-col :span="14">
          <el-button type="primary" class="submit" @click="submit">下一步</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-dialog
      title="XXXXXX协议内容"
      :visible.sync="xieyishow"
      width="90%"
      top="8vh"
    >
      <span>需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内
        容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的
      需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认
      需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认
      需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认不居中的需要注意的是内容是默认
      </span>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="xieyishow = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import bus from '../../assets/eventBus'

  export default {
    name: 'inputs',
    data () {
      return {
        issubmit: false,
        infodata: {xieyi: true, zx: false},
        xieyishow: false
      }
    },
    computed: {
      getxieyi () {
        return this.infodata.xieyi
      }
    },
    methods: {
      loading () {

      },
      submit () {
        if (!this.issubmit) {
          this.vmoney()
        }
        if (this.issubmit) {
          this.vname()
        }
        if (this.issubmit) {
          this.vsex()
        }
        if (this.issubmit) {
          this.vbirthday()
        }
        if (this.issubmit) {
          this.vphone()
        }
        if (this.issubmit) {
          this.vcity()
        }
        if (this.issubmit) {
          const loading = this.$loading({
            lock: true,
            text: '加载中...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          })
          this.$axios.post('api/step_1', {
            step_1_data: this.infodata
          })
            .then(function (response) {
              loading.close()
              bus.$emit('currentheader', 'v-header2')
              bus.$emit('currentview', 'v-step')
              bus.$emit('tostep', false)
              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      },
      vmoney () {
        let infoobj = this.infodata
        let moneyval = infoobj.money
        if (moneyval) {
          let pre = /^[1-9]\d*(\.\d+)?$/
          if (!pre.test(moneyval)) {
            this.alertmsg('请填写有效金额')
            this.issubmit = false
            return false
          }
          if (moneyval > 100) {
            this.alertmsg('最大金额不超过100万')
            this.issubmit = false
            return false
          }
          this.issubmit = true
        } else {
          this.alertmsg('请填写贷款金额')
          this.issubmit = false
          return false
        }
      },
      vname () {
        let infoobj = this.infodata
        let nameval = infoobj.name
        if (nameval) {
          let reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/
          if (!reg.test(nameval)) {
            this.alertmsg('请填写中文姓名')
            this.issubmit = false
            return false
          }
          if (nameval.length > 4 || nameval.length === 1) {
            this.alertmsg('请填写正确姓名')
            this.issubmit = false
            return false
          }
          this.issubmit = true
        } else {
          this.alertmsg('请填写姓名')
          this.issubmit = false
          return false
        }
      },
      vsex () {
        let infoobj = this.infodata
        let sexval = infoobj.sex
        if (!sexval) {
          this.alertmsg('请选择性别')
          this.issubmit = false
          return false
        } else {
          this.issubmit = true
        }
      },
      vbirthday () {
        let infoobj = this.infodata
        let birthdayval = infoobj.birthday
        if (!birthdayval) {
          this.alertmsg('请填写出生日期')
          this.issubmit = false
          return false
        } else {
          this.issubmit = true
        }
      },
      vphone () {
        let infoobj = this.infodata
        let phoneval = infoobj.phone
        if (phoneval) {
          let res = /^1(3|4|5|7|8)\d{9}$/
          if (!res.test(phoneval)) {
            this.alertmsg('请填写正确手机号')
            this.issubmit = false
            return false
          } else {
            this.issubmit = true
          }
        } else {
          this.alertmsg('请填写手机号码')
          this.issubmit = false
          return false
        }
      },
      vcity () {
        let infoobj = this.infodata
        let cityval = infoobj.city
        if (!cityval) {
          this.alertmsg('请填写常驻城市')
          this.issubmit = false
          return false
        } else {
          this.issubmit = true
        }
      },
      alertmsg (tip) {
        this.$message({
          message: tip,
          duration: 2000,
          customClass: 'error_box',
          type: 'error'
        })
      },
      setbirthday () {
        var str = document.getElementById('date').value
        this.infodata.birthday = str
      },
      setcity () {
        var str = document.getElementById('area').value
        this.infodata.city = str
      }
    },
    watch: {
      getxieyi () {
        if (!this.infodata.xieyi) {
          document.querySelector('.submit').setAttribute('disabled', 'disabled')
        } else {
          document.querySelector('.submit').removeAttribute('disabled')
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import "../../assets/fonticon/iconfont.css"
  .myform
    .el-form-item
      margin-bottom 0
      margin-top 10px
      .el-form-item__content
        line-height normal
    .el-form-item.xieyi
      margin-top 5px
    .input-name
      display block
      line-height 40px
      padding-right 10px
      text-align right
    .button-box
      margin-top 30px !important
      .submit
        width 100%

  .error_box
    min-width 200px !important

  .el-dialog__body
    max-height 55vh !important
    overflow-y scroll !important

  @media (max-width: 320px)
    .input-name
      font-size 14px
</style>
