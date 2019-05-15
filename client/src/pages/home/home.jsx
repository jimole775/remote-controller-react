
import React from "react";
import {Route,NavLink,HashRouter,BrowserRouter,Link} from "react-router-dom";

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
            <NavLink to="/clock"> 测试跳转 </NavLink>
        );
    }
}

export default Home;
