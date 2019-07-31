<template>
  <div class="todos">
    <div>{{msg}}</div>
    <router-link to="/">Home</router-link>
    <router-link to="todos">Todos</router-link>
    <h1 clss="title">title</h1>
    <input type="text" v-model="newTodo.text" @keydown.13="creatTodo">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{todo.text}}
        <button @click="deleleTodo(todo)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Todos',
  data () {
    return {
      msg: 'this is todos',
      newTodo: {
        text: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'todos'
    ]),
  },
  methods: {
    ...mapActions([
      'addTodo',
      'delTodo'
    ]),
    deleleTodo ({id = -1, text = ''}) {
      // let  = item
      this.delTodo({
        id, text
      })
    },
    creatTodo () {
      this.addTodo({
        ...this.newTodo
      })
      // this.addTodo(this.newTodo) // not good
      this.newTodo.text = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
