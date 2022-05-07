import React from 'react'
import {Paper} from '@mui/material'
import {List} from '@mui/material'
import {Divider} from '@mui/material'
import {ListItem} from '@mui/material'
import {ListItemText} from '@mui/material'
import FormWithHooks from "./FormWithHooks"
function TodoList(props) {
    const {todos}=props;
  return (
    <div>
<FormWithHooks addTodo={props.addTodo}/>
    <Paper>
<List>
       {
todos.map(todo => 
<>
<ListItemText>
    {todo.title}
</ListItemText>
<Divider/>
</>
)
        }
</List>
    </Paper>
    </div>
  )
}

export default TodoList