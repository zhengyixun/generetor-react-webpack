import React from "react";

class Btn extends React.Component{
    render(){
        return(
            <div className="Btn">
                <div className="BtnLeft">L</div>
                <div className="BtnRight">R</div>
            </div>
        )
    }
    componentDidMount(){
        var ListBox=document.querySelector(".ListBox");
        var BtnLeft=document.querySelector(".BtnLeft");
        var BtnRight=document.querySelector(".BtnRight");
        BtnLeft.onclick=function(){
            ListBox.style.left=0;
        };
        BtnRight.onclick=function(){
            ListBox.style.left="-180px";
        }
    }
}
export default Btn;