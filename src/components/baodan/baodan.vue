<template>
  <el-row type="flex" justify="center">
    <el-col :span="22">
      <el-form-item label="寿险保单：">

        <el-radio-group size="medium" v-model="infodata[arr.name]">
          <el-radio-button :label="arr.item[0]" :name="arr.name"></el-radio-button>
        </el-radio-group>

        <el-radio-group size="medium" v-model="infodata[arr.name]">
          <el-radio-button :label="arr.item[1]" :name="arr.name"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'baodan',
    data () {
      return {
        infodata: {},
        arr: {
          name: 'baodan',
          title: '寿险保单',
          item: ['有', '没有']
        }
      }
    },
    computed: {
      watchinfodata () {
        return this.infodata
      }
    },
    methods: {
      senddata () {
        this.$emit('getdata', this.infodata)
      }
    },
    watch: {
      watchinfodata () {
        this.senddata()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .myform
    margin-top 20px

  .el-form-item .el-radio-group
    margin-left 8px

  .el-form-item .el-radio-group
    &:first-child
      margin-left 0px;

  .el-radio-button--medium .el-radio-button__inner
    padding 10px 0
    display inline-block
    width 78px
</style>
