import React from 'react'
import './Foot.css'
import {Link,withRouter} from 'react-router-dom'

 class Foot extends React.Component{
    state={
        ischo:'0'
    };
    constructor(props){
        super(props);
        props={
            ischo:'0'
        }
    }

    go=(n,m)=>{
        // 封装的路由跳转函数，接收跳转路径，和携带的参数
        this.goUrl(n,m);
        this.setState({
            // ischo:this.props.location.state.ischo
            // ischo:m.ischo
        })
 };
    render(){
        return(
            <div className="foot">
                                                           {/*带参数跳转                         /!*子组件接收父组件过来的props参数，动态改变class类*!/*/}
                <div onClick={this.go.bind(this,'indexs',{ischo:'0'})} data-cho="0" className={this.props.ischo==='0'?'foot_c':'foot_d'}>首页</div>
                <div onClick={this.go.bind(this,'trade',{ischo:'1'})}  data-cho="1" className={this.props.ischo==='1'?'foot_c':'foot_d'}>交易中心</div>
                <div onClick={this.go.bind(this,'mine',{ischo:'2'})}  data-cho="3" className={this.props.ischo==='2'?'foot_c':'foot_d'}>个人中心</div>
            </div>
        )
    }

}
export default withRouter(Foot)