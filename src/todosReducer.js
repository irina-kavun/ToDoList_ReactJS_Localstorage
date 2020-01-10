import uuid from "uuid/v4";

export const TODO_ACTIONS = {
    ADD: 'add',
    COMPLETE: 'complete',
    REMOVE: 'remove',
    EDIT: 'edit',
};

export const initialState = () => {
    //get todos from local storage
    const todosFromStorage = localStorage.getItem('todos');
    const todosParsed = JSON.parse(todosFromStorage);

    return todosParsed || []
};

export const todosReducer = (todos, action) => {
    const {type, text, _id, newTodo} = action;

    switch(type) {
        case TODO_ACTIONS.ADD:
            return [
                ...todos,
                {
                    _id: uuid(),
                    text,
                    completed: false
                }
            ];

        case TODO_ACTIONS.COMPLETE:
            return todos.map(
                todo => _id === todo._id
                ? {...todo, completed: !todo.completed}
                : todo);

        case TODO_ACTIONS.REMOVE:
            return todos.filter(todo => _id !== todo._id);

        case TODO_ACTIONS.EDIT:
            return todos.map(todo => todo._id === newTodo._id
                ? newTodo
                : todo);

        default:
            throw new Error();
    }
};