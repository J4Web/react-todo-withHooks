import {useState} from 'react'

function HandleForm(initiallyTodos) {
const [task,setTask]=useState(initiallyTodos)
function handleChange(e)
{
    setTask(e.target.value)
}
function reset()
{
    setTask('');
}
      return [task,handleChange,reset]
}

export default HandleForm