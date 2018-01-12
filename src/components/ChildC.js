import React from "react";

class ChildC extends React.Component{
    render(){
        return(
            <input onChange={this.props.change}/>
        )
    }
}

export default ChildC;