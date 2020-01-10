import React, { useState, useRef, useEffect } from 'react';
import T from 'prop-types';

export const ToDoInput = ({ onAdd, initialValue }) => {
    const [value, setInputValue] = useState(initialValue);
    const textInput = useRef();

    const onChange = event => setInputValue(event.target.value);

    const onSubmit = event => {
        event.preventDefault();
        if(value === '') return;

        onAdd(value);
        setInputValue('');
    };

    useEffect(() => textInput.current.focus(), []);

  return(
      <form onSubmit={onSubmit} className="todo-form">
          <input className="todo-input" {...{ value }} onChange={onChange} ref={textInput} />
      </form>
  )
};

ToDoInput.propTypes = {
    onAdd: T.func.isRequired,
    initialValue: T.string,
};

ToDoInput.defaultProps = {
    initialValue: '',
};