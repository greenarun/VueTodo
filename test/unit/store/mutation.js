export default {
    deleteTodoItem (state, todo) {
        const todos = state.todos;
        state.todos.splice(todos.indexOf(todo), 1);
    }
}