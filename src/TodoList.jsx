import React from 'react'
import {Paper} from '@mui/material'
import {List} from '@mui/material'
import {Divider} from '@mui/material'
import {ListItem} from '@mui/material'
import {ListItemText} from '@mui/material'

import TodoItem from './TodoItem'
function TodoList({todos,delTodo,toggleTodo}) {
    
  return (
    <div>
    <Paper>
<List>
       {
todos.map(todo => 
<>
<TodoItem task={todo.title} key={todo.id} id={todo.id} completed={todo.completed}
delTodo={delTodo}
toggleTodo={toggleTodo}

/>
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