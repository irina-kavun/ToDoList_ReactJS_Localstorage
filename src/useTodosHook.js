import {useEffect, useReducer} from "react";
import {initialState, TODO_ACTIONS, todosReducer} from "./todosReducer";

export const useTodosHook = () => {
    const [todos, dispatch] = useReducer(todosReducer, initialState());

    const onAdd = text => dispatch({
        text,
        type: TODO_ACTIONS.ADD,
    });

    const onSwitch = _id => dispatch({
        _id,
        type: TODO_ACTIONS.COMPLETE,
    });

    const onRemove = _id => dispatch({
        _id,
        type: TODO_ACTIONS.REMOVE,
    });

     const onEdit = newTodo => dispatch({
         newTodo,
         type: TODO_ACTIONS.EDIT,
     });

    //save todos to the local storage
    useEffect(() => {
        const todosStringified = JSON.stringify(todos);
        localStorage.setItem('todos', todosStringified)
    }, [todos]);

    return {
        todos,
        onAdd,
        onSwitch,
        onRemove,
        onEdit,
    }
};