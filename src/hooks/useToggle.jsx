import React,{useState} from 'react'

function useToggle(start=false) {
    const [initial,setInitial]=useState(start);
    function handleToggle()
    {
        setInitial(!initial)
    }
    return [initial,handleToggle]
}

export default useToggle