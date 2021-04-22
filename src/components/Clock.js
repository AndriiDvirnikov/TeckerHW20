import React from "react";
import { Buddy } from "./Buddy";
import { Ticker } from "./Ticker";
import { Timer } from "./Timer";
import { Timer2 } from "./Timer2";



export const Clock = class Clock extends React.Component {
    constructor (props){
        super(props)

        this.state = {
            open: true
        }
        this.toggle = this.toggle.bind(this);

    }
    
    
    toggle () { 
        this.setState(({open}) => ({
            open: !open
        }))
    }
    render() {
        const { open } = this.state
        return(
            <div>
                <button onClick={this.toggle}>{open ? 'Close':'Open'} Clock</button>
                {/*<Ticker name = 'New Clock'/> */}
              


                <Timer step ={1} />
            </div>
            
        )
    }

}