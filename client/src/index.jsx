import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router,Route,Switch,Redirect,NavLink} from "react-router-dom";
import Routes from "CLIENT_ROUTES/routes";
import Home from "CLIENT_PAGES/home/home";

//import RMTDistributor from "RMTDistributor";
// import services from "./services/services.export.js";
// import wsClient from "./webSocket.client.io/ws.client.export.js";
// import pages from "./pages/exports.js";
// import components from "./components/exports.js";
// angular.module("myApp", [uiRouter, components.name, pages.name, services.name, wsClient.name])
//     .config(function ($stateProvider, $urlRouterProvider) {
//         $urlRouterProvider.otherwise("home");
//     }).run(function($state,$rootScope,userStorage){
        
//         $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
          
//             const $ = angular.element;

//             // 禁止 求助者控制操作
//             if(userStorage.getStorage("remoteId") === 1){
//                 $("section").ready(function(){
//                     $("section").css("pointerEvents","none");
//                 });
//                 $("footer").ready(function(){
//                     $("footer").css("pointerEvents","none");
//                 });
//             }

//             console.log(event, toState, toParams, fromState, fromParams);
//         });
//     });
class Index extends React.Component {
    constructor(props){
        super(props);
        console.log("props:",props);
    }

    componentDidUpdate(){
        console.log("is router jump at App module!");
    }

    hasLogined(){
        return true;
    }

    loginPage(props){
        return {
            pathname: '/login',state: { from: props.location }
        }
    }

    render(){
        return (
            <div>
                <Home/>
                <Router>
                    <NavLink to="/trc"> 测试TRC </NavLink>
                    <Switch>
                        {
                            Routes.map((item, index) => {
                                console.log("routes item:",item);
                                return <Route key={index} path={item.path} exact render={ props =>{
                                    console.log("Route:",props);
                                    return (this.hasLogined() ? <item.component {...props} /> : <Redirect to={this.loginPage(props)} />)
                                }}
                                />
                            })
                        }
                    </Switch>
                </Router> 
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById("root"));



