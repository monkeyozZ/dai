<template>
  <div class="wrap top-bg">
    <div class="top">
      <em></em>
      <p>我们会根据您的信息为您制定贷款方案</p>
      <p>信息越准确，匹配越精准，放款速度越快！</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus">
  .top-bg
    position relative
    overflow hidden
    background: linear-gradient(to right, #fffefd, #fdf7e8);
    .top
      position: relative;
      width: 100%;
      height: 95px;
      padding-left: 90px;
      padding-top: 28px;
      padding-bottom: 28px;
      font-size: 0;
      box-sizing: border-box;
      em
        position: absolute
        display: block
        top: 14px
        left: 24px
        width: 48px
        height: 70px
        background-position: 0 0
        font-size: 0;
        background-image: url(./wap-icons2.png);
        background-repeat: no-repeat;
        background-size: 48px;
      p
        margin 0
        font-size: 14px
        line-height: 20px;
        color: #4a4a4a;

  .el-radio-button--medium .el-radio-button__inner
    padding 10px 0!important
    display inline-block!important
    width 78px!important
  .el-form-item__label
    padding 0!important
  .el-form-item
    margin 0!important
  .el-row
    margin-top 10px!important
  .el-message
    min-width 320px!important
  .el-message-box
    width 300px!important
  @media (max-width: 320px)
    .el-radio-button--medium .el-radio-button__inner
      padding 10px 0!important
      display inline-block!important
      width 66px!important
    .top
      p
        font-size 12px
</style>
