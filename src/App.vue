<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TodoList v-bind:todos="todos"  v-on:todo-delete="onDeleteTodo"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    TodoList,
  },
  data() {
    return {
      todos: [
        { id: 1, title: "Finish Vue crash course", completed: false },
        {
          id: 2,
          title: "Update app on App Store and Play Store",
          completed: true,
        },
        { id: 3, title: "Attend doctor's appointment", completed: false },
        {
          id: 4,
          title: "Watch one episode of Umbrella Academy",
          completed: false,
        },
      ],
    };
  },
  methods: {
    onDeleteTodo(id) {
      console.log('Deleting ' + id + "...");
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  line-height: 1.4;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
