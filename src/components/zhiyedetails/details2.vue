<template>
  <el-row type="flex" justify="center">
    <el-col :span="22">
      <div class="details-box">
        <el-row type="flex" justify="center" v-for="v in arr" :key="v.id">
          <el-col :span="22">
            <el-form-item :label="v.title+':'">
              <div>
                <el-radio-group size="medium" v-model="infodata[v.name]" v-for="(n,index) in v.item" :key="index">
                  <el-radio-button :label="n" :name="v.name"></el-radio-button>
                </el-radio-group>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'details1',
    data () {
      return {
        arr: [
          {
            id: 1,
            title: '工作时间',
            name: 'worktime',
            item: ['6个月', '12个月内', '一年以上']
          },
          {
            id: 2,
            title: '月收入',
            name: 'shouru',
            item: ['5千以下', '5千-1万', '1万以上']
          }
        ],
        infodata: {}
      }
    },
    computed: {
      watchtime () {
        return this.infodata
      }
    },
    methods: {
      senddata () {
        this.$emit('zhiyedetails', this.infodata)
      }
    },
    watch: {
      watchtime () {
        this.senddata()
      }
    }
  }
</script>

<style scoped lang="stylus">
  .details-box
    position relative
    background-color: #f6f6f6
    padding-bottom: 10px
    padding-top 5px
    margin-top 8px
    border-radius 5px
    &:before
      position absolute
      top: -15px
      left: 180px
      content ''
      width: 0;
      height: 0;
      border-left: 17px solid transparent;
      border-right: 17px solid transparent;
      border-bottom: 15px solid #f6f6f6;

  .el-form-item .el-radio-group
    margin-left 4px!important

  .el-form-item .el-radio-group
    &:first-child
      margin-left 1px!important

  @media (max-width: 320px)
    .details-box
      &:before
        left: 162px

</style>
