import React,{useState,useEffect} from 'react'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import {Toolbar} from '@mui/material';
import {Grid} from '@mui/material';
import TodoList from './TodoList';
import FormWithHooks from './FormWithHooks'
import { v4 as uuidv4 } from 'uuid';

function Todos() {
    const items=window.localStorage.getItem('todos');
    const initialTodos=items.length!==0?JSON.parse(items):[];
    // const initialTodos =[
    //     {id:1, title:"Complete my todo app", completed:false},
    //     {id:2, title:"Tree Day complete Tree then Binary Tree", completed:false},
    //     {id:3, title:"Do a little bit of web 3 stuff", completed:false},

    
    // ]

    const [todos,setTodos]=useState(initialTodos);

   const  addTodo=newTodo=>{
        setTodos([...todos,{id:uuidv4(), title:newTodo,completed:false}])
    }
    const deleteTodo=delTodoId=>{
        setTodos(todos.filter(todo=>todo.id !== delTodoId))

    }
    const toggleTodo=(todoId)=>{
       const updateTodo= todos.map(todo=>todo.id===todoId? {...todo,completed: !todo.completed}: todo
        )
        setTodos(updateTodo) 
    }
    const editTodo=(todoId,newTask)=>{
        const updateTodo= todos.map(todo=>todo.id===todoId? {...todo, title: newTask} : todo)
        setTodos(updateTodo)
    }

    useEffect(()=>{
        window.localStorage.setItem('todos',JSON.stringify(todos))
    })
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