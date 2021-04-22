import React, { useEffect, useRef, useState } from 'react';

export const Timer2 = (props) =>{
    const [time, changeTime] = useState (props.time);
    console.log (time);
    const id = useRef (null);
    let start = false;
    const clear = ()=>{
        clearInterval (id.current);
    }
console.log(start)
   const startTick =() =>{
        if (!start) {
             start=true;
            console.log (start)
        }else {
           start=false
        }
    }

    useEffect ( ()=>{
        if (start === true){
          id.current = setInterval ( ()=>{
                changeTime ((timer)=>timer-1)
            },1000);
        }
            return ()=> clear();
    }, []);
    useEffect( ()=>{
        if (time === 0 || !start){
            clear();
        }
    } )
    return (
        <div>
<button onClick={startTick}>clicc</button>
        <time>Timer : {time}</time>
       
        </div>
    )

}