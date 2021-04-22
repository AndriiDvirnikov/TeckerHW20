import React, { useEffect, useRef, useState } from 'react';

export const Timer2 = (props) =>{
    let sec = 0;
    let min = 0;
    const [time, changeTime] = useState ({min: props.min, sec: props.sec});
    console.log (time);
    const id = useRef (null);
    let start = false;
    const step = props.step *1000;
    const clear = ()=>{
        clearInterval (id.current);
    }
    const [timer,setTimer] =useState(null)

    const startTick =() =>{

            id.current = setInterval ( ()=>{
                changeTime((times)=>{
                    const uTimes = {...times}
                    if (uTimes.sec > 0){
                        uTimes.sec = uTimes.sec- props.step;
                       
                    } 
                if (uTimes.sec <= 0 ){
                    if (uTimes.min === 0) {
                        clearInterval (id.current)
                    } else if(uTimes.min>0){
                        uTimes.min = uTimes.min - 1;
                        uTimes.sec = 60 - props.step;
                    }
                }
                return uTimes;
            })
            },step); 
              setTimer (id.current) 
    }

    const stoptTick = ()=> {
        start = false;
        console.log ('time remind: ',time.min ,':', time.sec)
        clear ();
    }
    useEffect ( ()=>{
        if (start === true){
            startTick ();
        }
            return ()=> clear();
    }, []);
     
    return (
        <div>
            <button onClick={startTick}>click</button>
            <button onClick={stoptTick}>stop</button>
            <time>Timer {time.min} : {time.sec<10 ? `0${time.sec}` : time.sec}</time>
       
        </div>
    )

}



