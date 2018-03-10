<template>
  <div>
    <form action="">
          <v-input></v-input>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  import input from '@/components/form/input'
  export default {
    name: 'index',
    components: {
      'v-input': input
    },
    data () {
      return {}
    }
  }
</script>

<style scoped leng="stylus">
</style>
