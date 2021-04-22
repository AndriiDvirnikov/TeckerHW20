import React from "react"

export const Timer = class Timer extends React.Component {
       state = {
            minutes: 0,
            seconds: 5,
            
            start:false,
        }
    start = () =>{
        if(this.state.start){
            this.setState ({start:false})
        }else (this.setState ({start:true}))
    }

  

    startOnClick = () => {
        if (this.state.start){
            clearInterval (this.ticker);
            this.setState ({start: false})
        } else {
            const step = this.props.step*1000;
            this.ticker = setInterval ( ()=>{ 
                const {seconds,minutes} = this.state
                if (seconds>0){
                    this.setState (({seconds})=>({seconds:seconds-1}))
                }  
                if (seconds===0){
                    if (minutes === 0){
                        clearInterval (this.ticker)
                    }else {
                        this.setState (({minutes})=>({minutes:minutes-1, seconds:59}))
                    }
                }
        },step)
    }
}
    stopOnlick = () => {
        clearInterval (this.ticker) 
        console.log ('time left', this.state.minutes, ':', this.state.seconds <10? `0${this.state.seconds}`: this.state.seconds)
    }

    componentDidMount (){
    
    }



    render (){
        const {minutes,seconds}= this.state
        return (
            <div>
                <time>Time remaining {minutes} : {seconds<10? `0${seconds}`: seconds}</time>
                <button onClick={this.startOnClick}>Start</button>
                <button onClick={this.stopOnlick}>Stop</button>
            </div>
        )
    }
}