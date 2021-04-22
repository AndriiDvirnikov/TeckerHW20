import React from "react"

export const Buddy = class Buddy extends React.PureComponent{
    render (){
        console.log ('render Buddy')
        return(
            <div>Hello, I'm your buddy. My name is {this.props.name}</div>
        )
    }
}