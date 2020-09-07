<template>
  <div>
    <p v-bind:key="todo.id" v-for="todo in allTodos">
      <TodoItem
        v-bind:todo="todo"
        v-on:todo-delete="$emit('todo-delete', todo.id)"
      />
    </p>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TodoList",
  // props: ["todos"],
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters(["allTodos"])
    // ...mapGetters('todoList', ["allTodos"])
  },
  methods: {
    ...mapActions(["fetchTodos"])
    // ...mapActions('todoList', ["fetchTodos"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped></style>
