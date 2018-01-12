import React from "react";

class Img extends React.Component{
    render(){
        return(
            <img src={this.props.src} alt=""/>
        )
    }
}

export default Img;