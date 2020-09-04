<template>
  <div class="todo-item" v-bind:class="{ 'is-complete': todo.completed }">
    <p>
      <input
        type="checkbox"
        v-on:change="onCompleteChange"
        v-bind:checked="todo.completed"
      />
      {{ todo.title }}
      <button class="del" @click="onDeleteTodo">x</button>
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    ...mapActions(["deleteTodo"]),
    onCompleteChange() {
      console.log("onCompleteChange: " + !this.todo.completed);
      this.todo.completed = !this.todo.completed;
    },
    onDeleteTodo() {
      console.log("onDeleteTodo: " + this.todo.id);
      // this.$emit('todo-delete', this.todo.id);
      this.deleteTodo(this.todo.id);
    }
  }
};
</script>

<style scoped>
.todo-item {
  padding: 1em;
  background: #f4f4f4;
  border-bottom: 1px #bdbdbd dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: red;
  color: white;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  float: right;
  border-radius: 50%;
}
</style>
