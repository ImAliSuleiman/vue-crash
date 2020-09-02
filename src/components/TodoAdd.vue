<template>
  <div>
    <form @submit="onAddTodo">
      <input type="text" name="title" placeholder="Add Todo..." v-model="title"/>
      <input type="submit" class="btn" value="Add"/>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "TodoAdd",
  data() {
      return {
          title: ''
      }
  },
  methods: {
    onAddTodo(e) {
        e.preventDefault();

        const newTodo = {
            id: uuidv4(),
            title: this.title,
            completed: false
        }

        // Send to parent
        this.$emit('todo-add', newTodo);
        // Clear fields
        this.title = '';
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 8px;
}

input[type="submit"] {
  flex: 2;
}
</style>