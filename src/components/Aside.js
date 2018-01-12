import React from 'react';
class Aside extends React.Component {
    constructor(){
        super();
        this.mouseLeave=this.mouseLeave.bind(this);
        this.mouseEnter=this.mouseEnter.bind(this);
        this.state={flag:false};
    }
    mouseEnter(){
        this.setState({
            flag:true,
        });
        var aside=document.querySelectorAll(".Aside");
        var show=document.querySelector("show");

    }
    mouseLeave(){
        this.setState({
            flag:false,
        });
    }
    render() {
        return (
            <div className="BodyLeft">
                <div className="Aside" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>体育健康</div>
                <div className="Aside" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>木工房</div>
                <div className="Aside" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>碳烧积木</div>
                <div className="Aside" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>木质攀爬</div>
                <div className="Aside" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>游乐设施</div>
                {/*鼠标移入显示区域*/}
                <div className={this.state.flag?"show on":"show off"}>x</div>
            </div>
        )
    }
    componentWillMount(){
        alert("componentWillMount");
    }
    componentDidMount(){
        alert("componentDidMount")
    }
}
export default Aside