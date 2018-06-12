import React from 'react'
import './Foot.css'
import {Link,withRouter} from 'react-router-dom'

 class Foot extends React.Component{
    constructor(props){
        super(props);
        props={
            ischo:'0'
        };
        this.state={
            ischo:'0',
            classType:this.props.className
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
        const classes=['foot'];
        classes.push(this.state.classType);
        return(
            <div   className={classes.join(" ")}>
                                                           {/*带参数跳转                         /!*子组件接收父组件过来的props参数，动态改变class类*!/*/}
                <div onClick={this.go.bind(this,'/',{ischo:'0',header:'Index'})} data-cho="0" className={this.props.ischo==='0'?'foot_c':'foot_d'}>
                    <div>Index</div>
                </div>
                <div onClick={this.go.bind(this,'trade',{ischo:'1',header:'Trade'})}  data-cho="1" className={this.props.ischo==='1'?'foot_c':'foot_d'}>Trade</div>
                <div onClick={this.go.bind(this,'mine',{ischo:'2',header:'Center'})}  data-cho="3" className={this.props.ischo==='2'?'foot_c':'foot_d'}>Mine</div>
            </div>
        )
    }

}
export default withRouter(Foot)