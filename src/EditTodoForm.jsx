import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import HandleForm from './hooks/HandleForm'
function EditTodoForm({editTodo,id,task,open}){
   const [val,handleChange,reset] =HandleForm(task)
   function handleEditTodoForm(e){
e.preventDefault()
editTodo(id,val);
open()

   }
    return <form onSubmit={handleEditTodoForm}
    style={{marginLeft:"1rem",width:"100%"}}
    >
    
    <TextField margin="normal"

        value={val}
        onChange={handleChange}
        fullWidth
        autoFocus
    />

    </form>

}

export default EditTodoForm;