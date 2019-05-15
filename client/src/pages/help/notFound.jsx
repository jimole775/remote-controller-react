
import React from "react";
class NotFound extends React.Component{ 
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        return (<div>your page is not found</div>)
    }
}

export default NotFound;