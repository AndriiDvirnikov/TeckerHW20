import React from "react"

export const Timer = class Timer extends React.Component {
       state = {         
            start:false,
        }
  

    startOnClick = () => {
        
        if (this.state.start){
            clearInterval (this.ticker);
            this.setState ({start: false})
        } else {
            const step = this.props.step*1000;
            this.ticker = setInterval ( ()=>{ 
                const {min,sec} = this.props;
                if (sec>0){
                   sec = sec-1
                }  
                if (sec===0){
                    if (min === 0){
                        clearInterval (this.ticker)
                    }else {
                        this.setState (({min})=>({min:min-1, sec:59}))
                    }
                }
        },step)
    }
}
    stopOnlick = () => {
        clearInterval (this.ticker) 
        console.log ('time left', this.props.min, ':', this.props.sec <10? `0${this.props.sec}`: this.props.sec)
    }




    render (){
        const {min,sec}= this.props
        console.log (this.props)
        return (
            <div>
                <time>Time remaining {min} : {sec<10? `0${sec}`: sec}</time>
                <button onClick={this.startOnClick}>Start</button>
                <button onClick={this.stopOnlick}>Stop</button>
            </div>
        )
    }
}