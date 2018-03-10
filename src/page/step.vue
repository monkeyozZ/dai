<template>
  <div>
    <el-form class="myform">
      <v-baodan @getdata="getdata"></v-baodan>
      <v-fang @getdata="getdata1"></v-fang>
      <v-car @getdata="getdata2"></v-car>
      <v-job @getdata="getdata3" @getworkcategory="getworkcategory"></v-job>
      <component :is="currentView" @zhiyedetails="zhiyedetails"></component>
      <!--<details1 @zhiyedetails="zhiyedetails"></details1>-->
      <el-row type="flex" justify="center" class="button-box">
        <el-col :span="14">
          <el-button type="primary" class="submit" @click="submit">下一步</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import baodan from '@/components/baodan/baodan'
  import fang from '@/components/fang/fang'
  import car from '@/components/car/car'
  import job from '@/components/zhiye/zhiye'
  import details1 from '@/components/zhiyedetails/details1'
  import details2 from '@/components/zhiyedetails/details2'
  import details3 from '@/components/zhiyedetails/details3'

  export default {
    name: 'step',
    components: {
      'v-baodan': baodan,
      'v-fang': fang,
      'v-car': car,
      'v-job': job,
      'details1': details1,
      'details2': details2,
      'details3': details3
    },
    data () {
      return {
        infodata: [],
        obj: {},
        currentView: ''
      }
    },
    methods: {
      zhiyedetails (e) {
        this.infodata['workdetails'] = e
      },
      getdata (e) {
        this.infodata['baodan'] = e
      },
      getdata1 (e) {
        this.infodata['fang'] = e
      },
      getdata2 (e) {
        this.infodata['car'] = e
      },
      getdata3 (e) {
        this.infodata['job'] = e
      },
      getworkcategory (e) {
        this.currentView = e
      },
      alertmsg (tip) {
        this.$message({
          message: tip,
          duration: 2000,
          customClass: 'error_box',
          type: 'error'
        })
      },
      submit () {
        let statubaodan = this.infodata['baodan']
        let statufang = this.infodata['fang']
        let statucar = this.infodata['car']
        let statujob = this.infodata['job']
        let catejob = this.currentView
        let statuworkdel = this.infodata['workdetails']
        if (!statubaodan) {
          this.alertmsg('请选择保单情况')
          return false
        } else {
          this.obj.baodan = this.infodata['baodan']['baodan']
        }
        if (!statufang) {
          this.alertmsg('请选择房产情况')
          return false
        } else {
          this.obj.home = this.infodata['fang']['fang']
        }
        if (!statucar) {
          this.alertmsg('请选择车产情况')
          return false
        } else {
          this.obj.car = this.infodata['car']['car']
        }
        if (!statujob) {
          this.alertmsg('请选择职业情况')
          return false
        } else {
          this.obj.job = this.infodata['job']['job']
        }
        if (catejob === 'details1') {
          delete this.obj.license
          if (!statuworkdel) {
            this.alertmsg('请选择工作时间')
            return false
          }
          if (statuworkdel) {
            let statuwktime = this.infodata['workdetails']['worktime']
            let statufafang = this.infodata['workdetails']['fafang']
            let statushouru = this.infodata['workdetails']['shouru']
            let statugjj = this.infodata['workdetails']['gongjijing']
            if (!statuwktime) {
              this.alertmsg('请选择工作时间')
              return false
            } else {
              this.obj.worktime = statuwktime
            }
            if (!statufafang) {
              this.alertmsg('请选择工资发放形式')
              return false
            } else {
              this.obj.wagesway = statufafang
            }
            if (!statushouru) {
              this.alertmsg('请选择收入范围')
              return false
            } else {
              this.obj.incomerange = statushouru
            }
            if (!statugjj) {
              this.alertmsg('请选择公积金情况')
              return false
            } else {
              this.obj.gongjijing = statugjj
            }
          }
        }
        if (catejob === 'details2') {
          delete this.obj.license
          delete this.obj.wagesway
          delete this.obj.gongjijing
          delete this.obj.worktime
          delete this.obj.incomerange
          if (!statuworkdel) {
            this.alertmsg('请选择工作时间')
            return false
          }
          if (statuworkdel) {
            if (statuworkdel['gongjijing']) {
              this.alertmsg('请选择工作时间')
              return false
            }
            let statuwktime = this.infodata['workdetails']['worktime']
            let statushouru = this.infodata['workdetails']['shouru']
            if (!statuwktime) {
              this.alertmsg('请选择工作时间')
              return false
            } else {
              this.obj.worktime = statuwktime
            }
            if (!statushouru) {
              this.alertmsg('请选择收入范围')
              return false
            } else {
              this.obj.incomerange = statushouru
              // console.log(this.obj)
            }
          }
        }
        if (catejob === 'details3') {
          delete this.obj.wagesway
          delete this.obj.gongjijing
          delete this.obj.worktime
          delete this.obj.incomerange
          if (!statuworkdel) {
            this.alertmsg('请选择收入范围')
            return false
          }
          if (statuworkdel) {
            if (statuworkdel['worktime']) {
              this.alertmsg('请选择收入范围')
              return false
            }
            let statushouru = this.infodata['workdetails']['shouru']
            let statuzhizhao = this.infodata['workdetails']['zhizhao']
            if (!statushouru) {
              this.alertmsg('请选择收入范围')
              return false
            } else {
              this.obj.incomerange = statushouru
            }
            if (!statuzhizhao) {
              this.alertmsg('请选择执照时间')
              return false
            } else {
              this.obj.license = statuzhizhao
            }
          }
        }
        // this.loading() // loading动画
        const loading = this.$loading({
          lock: true,
          text: '加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        this.$axios.post('api/step_2', {step_2_data: this.obj})
          .then((response) => {
            loading.close()
            this.$alert('提交成功，请等待客服与您联系核实信息！', {
              confirmButtonText: '我知道了',
              showCancelButton: false,
              callback: () => {
                window.location.reload()
              }
            })
          })
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .myform
    margin-top 20px
    .button-box
      margin-top 20px!important
      margin-bottom 50px!important
      .submit
        width 100%
</style>
