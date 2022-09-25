// import React from 'react'
import { useRef, useState } from "react";
function useCountdown(fromTime:number=100) {

    const [time,setTime]=useState<number>(100);
    const timerId=useRef<any> (null);


    const starts=()=>{
        if(!timerId.current){
            timerId.current=setInterval(()=>{
                setTime((prevTime)=>prevTime-1);
            },fromTime)
        }
    }

    const pause =()=>{
        clearInterval(timerId.current);
        timerId.current=null;
    }
    const reset =()=>{
        clearInterval(timerId.current);
        setTime(fromTime)
    }



  return  {time ,starts,pause,reset}
}

export default useCountdown