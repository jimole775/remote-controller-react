
import React from "react";
import {Route,NavLink,HashRouter,BrowserRouter,Link} from "react-router-dom";

import Clock from "CLIENT_COMPONENTS/test/Click";
import Relative from "CLIENT_COMPONENTS/test/testRelativeComponent";

class Home extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    componentDidUpdate(){
        console.log("is router jump at Home module!");
    }
    render(){
        return (
            <div name="Rongxis">
                <header></header>
                <footer></footer>
                <BrowserRouter>
                    <input type="text" ref={(input)=>{this.input = input}}/>
                    <NavLink to="/clock"> 测试跳转 </NavLink>
                    <Route exact path="/clock" component={Clock}/>
                </BrowserRouter>
            </div>
        );
    }
}

export default Home;
