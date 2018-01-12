require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Box from './Box.js';
import Navs from './Nav.js';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Talks from "./Talks";
import Loves from "./Loves";
import Phone from "./Phone";
import Map from "./Map";

import Aside from "./Aside";
import List from "./List";
import Btn from "./Btn";
//瀑布流
import Pint from "./Pint";
//自组建向父组件传值
import ParC from "./ParC";
//画廊
import Gallery from "./Gallery";

class AppComponent extends React.Component {
    render() {
        return (
            <Router>
                <div className="index">
                    <Box/>
                    <Navs/>
                    <div className="Body">
                        <Aside/>
                        <div className="BodyRight">
                            <Route path="/Home" component={ Home }/>
                            <Route path="/About" component={ About }/>
                            <Route path="/Talks" component={ Talks }/>
                            <Route path="/Loves" component={ Loves }/>
                            <Route path="/Phone" component={ Phone }/>
                            <Route path="/Map" component={ Map }/>
                        </div>
                    </div>
                    {/*滚动列表*/}
                    <List/>
                    <Btn/>
                    {/*瀑布流布局*/}
                    <Pint/>
                    {/*通过子组件向父组件传值*/}
                    <ParC/>
                    {/*画廊应用*/}
                    <Gallery/>
                </div>
            </Router>
        );
    }
}
AppComponent.defaultProps = {
};
export default AppComponent;
