import React from "react"
import Img from "./Img";

class Pint extends React.Component{
    render(){
        return(
            <div className="Pint">
                <div className="PintSon" style={{height:260+"px"}}>1</div>
                <div className="PintSon" style={{height:65+"px"}}>2</div>
                <div className="PintSon" style={{height:120+'px'}}>3</div>
                <div className="PintSon" style={{height:145+'px'}}>4</div>
                <div className="PintSon" style={{height:90+'px'}}>5</div>
                <div className="PintSon" style={{height:145+'px'}}>6</div>
                <div className="PintSon" style={{height:160+'px'}}>7</div>
                <div className="PintSon" style={{height:65+'px'}}>8</div>
                <div className="PintSon" style={{height:230+'px'}}>9</div>
                <div className="PintSon" style={{height:140+'px'}}>10</div>
                <div className="PintSon" style={{height:85+'px'}}>11</div>
                <div className="PintSon" style={{height:20+'px'}}>12</div>
                <div className="PintSon" style={{height:145+'px'}}>13</div>
                <div className="PintSon" style={{height:50+'px'}}>14</div>
                <div className="PintSon" style={{height:65+'px'}}>15</div>
                <div className="PintSon" style={{height:230+'px'}}>16</div>
                <div className="PintSon" style={{height:200+'px'}}>
                    <Img src="../images/tone.jpg"/>
                </div>
            </div>
        )
    }
}

export default Pint;