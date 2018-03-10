<template>
  <el-row type="flex" justify="center">
    <el-col :span="22">
      <el-form-item :label="arr.title+'：'">

        <el-radio-group size="medium" v-model="infodata[arr.name]">
          <el-radio-button :label="arr.item[0]" :name="arr.name"></el-radio-button>
        </el-radio-group>

        <el-radio-group size="medium" v-model="infodata[arr.name]">
          <el-radio-button :label="arr.item[1]" :name="arr.name"></el-radio-button>
        </el-radio-group>

        <el-radio-group size="medium" v-model="infodata[arr.name]">
          <el-radio-button :label="arr.item[2]" :name="arr.name"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'job',
    data () {
      return {
        infodata: {},
        workway: '',
        arr: {
          name: 'job',
          title: '您的职业',
          item: ['上班族', '公务员', '私营业主']
        }
      }
    },
    computed: {
      watchinfodata () {
        return this.infodata
      },
      watchwork () {
        return this.infodata.job
      }
    },
    methods: {
      senddata () {
        this.$emit('getdata', this.infodata)
      },
      sendwork () {
        this.$emit('getworkcategory', this.workway)
      }
    },
    watch: {
      watchinfodata () {
        this.senddata()
      },
      watchwork () {
        let namestr = this.infodata.job
        switch (namestr) {
          case '上班族':
            this.workway = 'details1'
            break
          case '公务员':
            this.workway = 'details2'
            break
          case '私营业主':
            this.workway = 'details3'
            break
          default:
            this.workway = ''
        }
      },
      workway: function () {
        this.sendwork()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .el-form-item .el-radio-group
    margin-left 8px!important

  .el-form-item .el-radio-group
    &:first-child
      margin-left 0px!important
</style>
