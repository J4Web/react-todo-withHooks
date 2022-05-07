import React,{useState,useEffect} from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import {Toolbar} from '@mui/material';
import {Grid} from '@mui/material';
import TodoList from './TodoList';

function Todos() {
    const initiallyTodos =[
        {id:1, title:"Complete my todo app", completed:false},
        {id:2, title:"Tree Day complete Tree then Binary Tree", completed:false},
        {id:3, title:"Do a little bit of web 3 stuff", completed:false},

    
    ]

    const [todos,setTodos]=useState(initiallyTodos);

   const  addTodo=newTodo=>{
        setTodos([...todos,{id:4, title:newTodo,completed:false}])
    }
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
        <TodoList todos={todos} addTodo={addTodo}/>
    </Paper>
)
}

export default Todos


// -TODOAPP
//  -todoform-
//   todoTitle
//   -todolist
//   -list