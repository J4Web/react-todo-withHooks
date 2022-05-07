import React from 'react'
import {ListItemText} from '@mui/material'
import {ListItem} from '@mui/material/'
import {Checkbox} from '@mui/material'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListItemSecondaryAction } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
function TodoItem({task,completed,delTodo,id,toggleTodo}) {
    function handleDel()
    {
        delTodo(id)
    }
    function handleComplete()
    {
        toggleTodo(id)
    }
  return (

    <ListItem>
    <Checkbox tabIndex={-1} checked={completed} onClick={handleComplete}/>
    <ListItemText style={{textDecoration: completed? 'line-through' : 'none'}}>{task}</ListItemText>
    <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={handleDel}>
            <DeleteIcon />
        </IconButton>
        <IconButton aria-label="Edit">
            <EditIcon/>
        </IconButton>
    </ListItemSecondaryAction>
</ListItem>

  )
}

export default TodoItem