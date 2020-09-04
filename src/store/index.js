import Vuex from 'vuex';
import Vue from 'vue';
import todoList from '../components/TodoList'

// Load VueX
Vue.use(Vuex);

// Create store
export default Vuex.Store({
    modules: {
        todoList
    }
});