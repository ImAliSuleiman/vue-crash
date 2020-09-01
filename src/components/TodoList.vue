<template>
  <div>
    <p v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:todo-delete="$emit('todo-delete', todo.id)" />
    </p>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    TodoItem,
  }
};
</script>

<style scoped>
</style>