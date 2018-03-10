<template>
  <el-row type="flex" justify="center">
    <el-col :span="22">
      <el-form-item :label="arr.title+'：'">

        <el-radio-group size="medium" v-model="infodata[arr.name]">
          <el-radio-button :label="arr.item[0]" name="car"></el-radio-button>
        </el-radio-group>

        <el-radio-group size="medium" v-model="infodata[arr.name]">
          <el-radio-button :label="arr.item[1]" name="car"></el-radio-button>
        </el-radio-group>

        <el-radio-group size="medium" v-model="infodata[arr.name]">
          <el-radio-button :label="arr.item[2]" name="car"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'car',
    data () {
      return {
        infodata: {},
        arr: {
          name: 'car',
          title: '名下车产',
          item: ['无车', '有车贷', '有车无贷']
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
  .el-form-item .el-radio-group
    margin-left 8px

  .el-form-item .el-radio-group
    &:first-child
      margin-left 0px;
</style>
