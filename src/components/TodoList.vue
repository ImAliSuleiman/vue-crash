<template>
  <div>
    <p v-bind:key="todo.id" v-for="todo in todos">
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
  computed: mapGetters(["allTodos"]),
  methods: {
    ...mapActions(["fetchTodos"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped></style>
