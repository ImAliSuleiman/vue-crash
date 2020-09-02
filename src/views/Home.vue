<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Header /> -->
    <TodoAdd v-on:todo-add="onAddTodo" />
    <TodoList v-bind:todos="todos" v-on:todo-delete="onDeleteTodo" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoList from "../components/TodoList.vue";
// import Header from "../components/layouts/Header.vue";
import TodoAdd from "../components/TodoAdd.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    // HelloWorld
    TodoList,
    // Header,
    TodoAdd,
  },
  data() {
    return {
      todos: [
        // { id: 1, title: "Finish Vue crash course", completed: false },
        // {
        //   id: 2,
        //   title: "Update app on App Store and Play Store",
        //   completed: true,
        // },
        // { id: 3, title: "Attend doctor's appointment", completed: false },
        // {
        //   id: 4,
        //   title: "Watch one episode of Umbrella Academy",
        //   completed: false,
        // },
      ],
    };
  },
  methods: {
    onDeleteTodo(id) {
      console.log("Deleting " + id + "...");
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => {
          console.log(response.data);
          this.todos = this.todos.filter((todo) => todo.id !== id);
        })
        .catch((e) => console.log(e));

      // this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    onAddTodo(newTodo) {
      // Extract props from a new todo
      const { title, completed } = newTodo;

      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title: title,
          completed: completed,
        })
        .then((response) => (this.todos = [...this.todos, response.data]))
        .catch((e) => console.log(e));

      // this.todos = [...this.todos, newTodo];
    },
  },
  created() {
    console.log("Vue app created!");
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => {
        // console.log('data: ' + response.data.size);
        this.todos = response.data;
      })
      .catch((e) => console.log(e));
  },
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

.btn {
  display: inline-block;
  border: none;
  background: #757575;
  color: white;
  padding: 4px 16px;
  cursor: pointer;
}

.btn:hover {
  background: lightgrey;
}
</style>
