import React from "react";
import ChildC from "./ChildC";

class ParC extends React.Component{
    constructor(){
        super();
        this.state={
            email:''
        }
    }
    change(e){
        this.setState({
            email:e.target.value
        })
    }
    ref0(){
        this.refs.ref1.focus();
    }
    render(){
        return(
            <div className="ParC">
                <span>邮箱：{this.state.email}</span><br/>
                <ChildC name="email" change={this.change.bind(this)} />
                <input type="text" ref="ref1"/>
                <input type="button" value="ref测试" onClick={this.ref0.bind(this)}/>
            </div>
        )
    }
}
export  default ParC;