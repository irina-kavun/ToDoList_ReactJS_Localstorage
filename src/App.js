import React from 'react';

//use hook
import { useTodosHook } from './useTodosHook';

//components
import {Text} from './components/Text';
import {ToDoInput} from './components/ToDoInput';
import {ToDoItem} from "./components/ToDoItem";
import { TodosContext } from "./todosContext";

//styles
import './App.css';

function App() {
    const {
        todos,
        onAdd,
        onSwitch,
        onRemove,
        onEdit,
    }= useTodosHook();

  return (
    <div className="App">
        <Text size='18px'>Todos</Text>
        <ToDoInput onAdd={onAdd} />
        <TodosContext.Provider value={todos}>
            <div className="toDoList">
                {todos.map(
                    todo => <ToDoItem
                        key={todo._id}
                        {...{ todo }}
                        onSwitch={onSwitch}
                        onRemove={onRemove}
                        onEdit={onEdit}
                    />)}
            </div>
        </TodosContext.Provider>
    </div>
  );
}

export default App;
