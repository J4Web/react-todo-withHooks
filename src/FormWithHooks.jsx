import useForm  from "./hooks/HandleForm"
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

function FormWithHooks({addTodo}) {
    const [task,trackTask,resetTask] =useForm('')
  return (
    <Paper>
    <h3>{task}</h3>
    <form onSubmit={(e)=>{
        e.preventDefault();
        addTodo(task);
        resetTask();
    }}>
    <TextField name="task" value={task} onChange={trackTask} />

    </form>
        
    </Paper>
  )
}

export default FormWithHooks