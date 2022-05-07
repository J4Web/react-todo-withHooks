import React from 'react'
import {Paper} from '@mui/material'
import {List} from '@mui/material'
import {Divider} from '@mui/material'

import TodoItem from './TodoItem'
function TodoList({todos,delTodo,toggleTodo,editTodo}) {
    
 if(todos.length) { return (
    <Paper>
<List>
       {
todos?.map((todo,i) => 
<div key={i}>
<TodoItem task={todo.title} id={todo.id} completed={todo.completed}
delTodo={delTodo}
toggleTodo={toggleTodo}
editTodo={editTodo}

/>
{i < todos.length-1 && <Divider/>}
</div>
)
        }
</List>
    </Paper>
  )
}
return <> </>
}

export default TodoList