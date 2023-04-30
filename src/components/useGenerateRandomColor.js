import {useEffect, useState, useContext} from 'react';
import { Datacontext } from '../context/contextprovider';  
const useGenerateRandomColor = () => {
    const { state } = useContext(Datacontext)
    
    const [color,setColor] = useState("")
    const generateColor = () =>{
        setColor(Math.random().toString(16).substr(-6));
    };
    useEffect(()=>{
        generateColor()
    },[state.length])
    return {color,generateColor};
};
export default useGenerateRandomColor;