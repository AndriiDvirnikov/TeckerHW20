import React from "react";


export const Ticker = class Ticker extends React.Component {
    constructor (props){
        super (props)

       this.state = {
            date: new Date (),
            time: 50,
        }
    }


    componentDidMount (){
        this.ticker = setInterval ( ()=>{ this.setState ({date: new Date ()}) 
        },1000)
    }



componentWillUnmount () {
    clearInterval (this.ticker)
}


    render () {
        console.log('render ticker')
        return (
            <time>
                {this.state.date.toLocaleTimeString()}
            </time>
        )
    }
}