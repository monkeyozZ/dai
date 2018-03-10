<template>
  <div class="warp">
    <div class="main">
      <div class="header">
        <component :is="currentheader"></component>
      </div>

      <div class="container">
        <component :is="currentview"></component>
      </div>
      <div class="item" v-show="tostep">
        <v-item></v-item>
      </div>
    </div>

    <div class="footer">
      <p>Copyright&copy;xxxxxxx信息科技公司版权所有</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/common/header'
  import header2 from '@/components/common/header2'
  import index from '@/page/index'
  import step from '@/page/step'
  import bus from '../../assets/eventBus'
  import item from '@/components/recommend/recommend'

  export default {
    name: 'home',
    components: {
      'v-header': header,
      'v-header2': header2,
      'v-index': index,
      'v-step': step,
      'v-item': item
    },
    data () {
      return {
        currentview: 'v-index',
        currentheader: 'v-header',
        tostep: true
      }
    },
    mounted () {
      var _this = this
      bus.$on('currentheader', (msg) => {
        _this.currentheader = msg
      })
      bus.$on('currentview', (msg) => {
        _this.currentview = msg
      })
      bus.$on('tostep', (msg) => {
        _this.tostep = msg
      })
    }
  }
</script>

<style lang="stylus">
  html, body,#app {
    height: 100%;
  }
  .warp
    position relative
    min-height 100%
    padding-bottom 90px
    box-sizing border-box
    .main
      min-height: 100%
    .footer
      position: absolute
      bottom: 0
      width 100%
      box-sizing border-box
      background rgb(51, 47, 44)
      text-shadow none
      text-align center
      color #acafb3
      font-size 12px
      line-height 20px
      padding 10px
      p
        text-align center
  .item
    margin-top 50px
  .el-radio-button, .el-radio-button__inner
    outline none!important
  .el-radio-button__orig-radio:checked+.el-radio-button__inner
    border-radius 4px!important
    -webkit-appearance: none
</style>
