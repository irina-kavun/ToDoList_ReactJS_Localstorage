import React from 'react';
import T from 'prop-types'
import {toDoListPropTypes} from '../propTypes';
import { withCheckedStyles } from "../withCheckedStyles";

import { Checkbox } from "./Checkbox";
import { ToDoText } from "./ToDoText";
import { RemoveIcon } from "./RemoveIcon";

import "../App.css"

export const ToDoItem = withCheckedStyles(({ todo, onSwitch, onRemove, onEdit, additionalStyles }) => {
        return(
            <div className="toDoItem">
                <Checkbox {...{todo, onSwitch}} />
                <ToDoText {...{todo, onEdit, additionalStyles}}/>
                <RemoveIcon name="remove" onClick={() => onRemove(todo._id)}/>
            </div>
        )
    }
);

ToDoItem.propTypes = {
    ...toDoListPropTypes,
    onRemove: T.func.isRequired,
    onEdit: T.func.isRequired,
    additionalStyles: T.shape({
        color: T.string,
        textDecoration: T.string,
        })
};
