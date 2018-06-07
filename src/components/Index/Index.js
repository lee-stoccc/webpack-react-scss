import React from 'react';
import './index.scss';
import Foot from  '../com/Foot'

export default class Index extends React.Component{
    state={
        ischo:'99',
        me:'223'
    };
    componentWillMount   (){
        this.setState({
            ischo:this.props.location.state.ischo
        });
        console.log(this.state.ischo)
    };

    render(){
        return(
            <div>
            <div >{this.state.ischo}</div>
                <div>首页</div>
                    {/*/!*路由闯过来的参数*!/  把路由穿过来的参数立刻以父组件传给子组件*/}
               <Foot ischo={this.props.location.state.ischo}/>

            </div>
        )
    }
}