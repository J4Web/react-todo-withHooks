import useForm  from "./hooks/HandleForm"
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function FormWithHooks({addTodo}) {
    const [task,trackTask,resetTask] =useForm('')
  return (
    <Paper style={{margin: "1rem 0",padding: "0 1rem"}}>
    <h3>{task}</h3>
    <form onSubmit={(e)=>{
        e.preventDefault();
        addTodo(task);
        resetTask();
    }}>
    <TextField name="task" value={task} onChange={trackTask} 

        margin="normal" label="Add New Todo" 
        fullWidth
    />

    </form>
        
    </Paper>
  )
}

export default FormWithHooks