import React from 'react';
import './index.scss';
import Foot from  '../com/Foot'
import Alert from '../com/Alert/Alert'
import Header from '../com/Header/Header'

export default class Index extends React.Component{
    state={
        ischo:'0',
        header:'Index'
    };

    render(){
        return(
            <div>
                <Header header={this.state.header}/>
                <div onClick={this.Alert.bind(this,'1','登录成功')}>点击弹框事件</div>
                <Foot ischo={this.state.ischo}/>
                <Alert isShow={this.state.isShow} con_text={this.state.con_text}/>
            </div>
        )
    }
}
Index.defaultProps = {
    header: 'indexs'
};
