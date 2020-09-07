import axios from 'axios';

const state = {
    todos: [
        { id: 1, title: 'Todo One', completed: false },
        { id: 2, title: 'Todo Two', completed: false },
        { id: 3, title: 'Todo Three', completed: true },
        { id: 4, title: 'Todo Four', completed: false },
    ]
};

const getters = {
    allTodos: (state) => state.todos,
};

const actions = {
    async fetchTodos({ commit }) {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=20")
            .then((response) => {
                // console.log('data: ' + response.data.size);
                // this.todos = response.data;
                commit('setTodos', response.data);
            })
            .catch((e) => console.log(e));
    },

    async addTodo({ commit }, title) {
        axios
            .post("https://jsonplaceholder.typicode.com/todos", {
                title: title,
                completed: false,
            })
            .then((response) => commit('addTodo', response.data)) /* (this.todos = [...this.todos, response.data])) */
            .catch((e) => console.log(e));
    },

    async deleteTodo({ commit }, id) {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => {
                console.log('Todo deleted: ' + response.data);
                // this.todos = this.todos.filter((todo) => todo.id !== id);
                commit('deleteTodo', id);
            })
            .catch((e) => console.log(e));
    },

    async filterTodos({ commit }, e) {
        // console.log(e);
        // Get selected option
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        console.log(limit);

        axios
            .get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
            .then((response) => {
                // console.log('data: ' + response.data.size);
                // this.todos = response.data;
                console.log('Todos loaded: ' + response.data.length);
                commit('setTodos', response.data);
            })
            .catch((e) => console.log(e));
    },

    async updateTodo({ commit }, updatedTodo) {
        axios
            .put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo)
            .then((response) => {
                // console.log('data: ' + response.data.size);
                // this.todos = response.data;
                console.log('Todo updated: ' + response.data);
                commit('updateTodo', response.data);
            })
            .catch((e) => console.log(e));
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    // newTodo: (state, todo) => (state.todos = [...state.todos, todo]),
    // newTodo: (state, todo) => (state.todos.push(todo),
    addTodo: (state, todo) => {
        console.log('Todo added: ' + todo);
        state.todos.unshift(todo);
    },
    deleteTodo: (state, deletedId) => state.todos = state.todos.filter((todo) => todo.id != deletedId),
    updateTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);

        if (index !== -1) {
            state.todos.splice(index, 1, updatedTodo);
        }
    }
};

export default {
    // namespaced: true,
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}