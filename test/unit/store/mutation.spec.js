import mutations from './mutation'

test('Delete todo from list of todos', () => {
    const state = {
        todos: [{
            "title": "Create Vue.JS Project",
            "completed": false,
            "id": "3982939493"
        }]
    };
    const todo = {
        "title": "Create Vue.JS Project",
        "completed": false,
        "id": "3982939493"
    };
    mutations.deleteTodoItem(state, todo)
    expect(state.todos.includes(todo)).toBeFalsy();
})