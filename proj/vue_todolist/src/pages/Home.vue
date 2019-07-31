<template>
<div>
  <div>{{msg}}</div>
  <router-link to="/">Home</router-link>
  <router-link to="todos">Todos</router-link>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'this is home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
