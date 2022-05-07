import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

function useTodoState(initialTodos) {
        const [todos,setTodos]=useState(initialTodos);

//    const  addTodo=
//     }
    // const deleteTodo=

    // }
    // const toggleTodo=
    //     )
    //     setTodos(updateTodo) 
    // }
    // const editTodo=
  return {
      todos: todos,
      addTodo:newTodo=>setTodos([...todos,{id:uuidv4(), title:newTodo,completed:false}]),
      deleteTodo:delTodoId=>setTodos(todos.filter(todo=>todo.id !== delTodoId)),
      toggleTodo:(todoId)=>{
       const updateTodo= todos.map(todo=>todo.id===todoId? {...todo,completed: !todo.completed}: todo)
       return setTodos(updateTodo)
    },
    editTodo:(todoId,newTask)=>{
        const updateTodo= todos.map(todo=>todo.id===todoId? {...todo, title: newTask} : todo)
        setTodos(updateTodo)
    }


  }
}

export default useTodoState