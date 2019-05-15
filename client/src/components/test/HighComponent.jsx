import React from "react";

export default function(WrapComponent){
    return class HighComponent extends React.Component{
        constructor(props){
            super(props);
            this.newProps = {
                newP:"新增属性"
            };
        }
        render(){

            return (
                <div>
                    <span>高阶组件新增内容</span>
                    <WrapComponent {...this.props} {...this.newProps}/>
                </div> 
            )
        }
    }
}