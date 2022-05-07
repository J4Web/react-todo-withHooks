import React,{useState,useEffect} from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import {Toolbar} from '@mui/material';
import {Grid} from '@mui/material';
import TodoList from './TodoList';
import FormWithHooks from './FormWithHooks'
import useTodoState from './hooks/useTodoState'

function Todos() {
    const items=window.localStorage.getItem('todos');
    const initialTodos=items.length!==0?JSON.parse(items):[];
    const {todos,addTodo,deleteTodo,toggleTodo,editTodo}=useTodoState(initialTodos);


    useEffect(()=>{
        window.localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
return (
    <Paper style={{ 
        padding:"0",
        margin: "0",
        height: "100vh",
        backgroundColor:"#fafafa"
    }} elevation={0}>
    <AppBar color="primary" position="static" style={{height: "64px"}}>
        <Toolbar>
            <Typography color="inherit">ToDos with Hooks</Typography>
        </Toolbar>
    </AppBar>
    <Grid container   style={{alignItems: "center",justifyContent: "center",marginTop: "1rem"}} >
<Grid item xs={11} md={8} lg={4}>
<FormWithHooks addTodo={addTodo}/>
    <TodoList todos={todos} delTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
    </Grid>

    </Grid>
            
    </Paper>
)
}

export default Todos


// -TODOAPP
//  -todoform-
//   todoTitle
//   -todolist
//   -list