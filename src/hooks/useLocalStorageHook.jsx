import {useState,useEffect} from 'react'
function useLocalStorageHook(key,initialVal)
{

    //make piece of state, based off of value in  localStorage or default
    //use of useEffect to make update localStorage when todos  change
    const [state,setState] = useState(()=>{
        let items;
        try{
        items= JSON.parse(localStorage.getItem(window.localStorage.getItem(key))||String(initialVal) )
    }catch(e){ 
        items=initialVal;
}
return items;
});
useEffect(()=>{
    window.localStorage.setItem(key,JSON.stringify(state))
},[state]);

}

export default useLocalStorageHook;