<template>
  <el-row el-row type="flex" justify="center">
    <el-col :span="22">
      <div class="item_box">
        <h2>推荐机构</h2>
        <ul>
          <li><img src="./item_1.jpg" alt="平安普惠"></li>
          <li><img src="./item_2.jpg" alt="融360"></li>
          <li><img src="./item_3.jpg" alt="360借条"></li>
          <li><img src="./item_3.jpg" alt="360借条"></li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus">
  .item_box
    h2
      width 90%
      text-align center
      margin 0 auto
      font-size 16px
      font-weight normal
    ul
      width 90%
      padding 0.2rem 0
      margin 0 auto
      overflow hidden
      li
        &:nth-child(2n-1)
          float left
          width 50%
          padding-right 10px
          margin-top 10px
          box-sizing border-box

        &:nth-child(2n)
          float left
          width 50%
          padding-left 10px
          margin-top 10px
          box-sizing border-box

      li
        img
          display block
          max-width 100%
          height auto
</style>
