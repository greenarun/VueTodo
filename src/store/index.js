import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    loading: true
  },
  getters: {
    todos: state => state.todos
  },
  mutations: {
    SET_LOADING (state, flag) {
      state.loading = flag
    },
    SET_TODOS (state, todos) {
      state.todos = todos
    },
    ADD_TODO (state, todoObject) {
      state.todos.push(todoObject)
    },
    DELETE_TODO (state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    UPDATE_TODO (state, todo) {
      var todos = state.todos
      todos.forEach((element, index) => {
        if (element.id === todo.id) {
          todos[index] = todo
        }
      })
      state.todos = todos
    },
    CLEAR_NEW_TODO (state) {
      state.newTodo = ''
    }
  },
  actions: {
    getTodos ({ commit }) {
      commit('SET_LOADING', true)
      axios
        .get('http://localhost:3000/todos')
        .then(list => list.data)
        .then(todos => {
          commit('SET_TODOS', todos)
          commit('SET_LOADING', false)
        })
    },
    addTodoItem ({ commit }, todoItem) {
      if (!todoItem) {
        return
      }
      const todo = {
        title: todoItem,
        completed: false,
        id: randomId()
      }
      axios.post('http://localhost:3000/todos', todo).then(() => {
        commit('ADD_TODO', todo)
      })
    },
    deleteTodoItem ({ commit }, todo) {
      axios.delete(`http://localhost:3000/todos/${todo.id}`).then(() => {
        commit('DELETE_TODO', todo)
      })
    },
    updateTodoItem ({ commit }, todo) {
      const updatedTodo = todo
      updatedTodo.completed = !updatedTodo.completed
      axios.put(`http://localhost:3000/todos/${todo.id}`, updatedTodo).then(() => {
        commit('UPDATE_TODO', todo)
      })
    },
    clearNewTodo ({ commit }) {
      commit('CLEAR_NEW_TODO')
    }

  }
})

function randomId () {
  const d = new Date()
  let ms = d.valueOf()
  return ms
}
