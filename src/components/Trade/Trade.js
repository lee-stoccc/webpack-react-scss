import React from 'react';
import './Trade.css';
import Foot from  '../com/Foot'
import Header from '../com/Header/Header'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';


export default class Trade extends React.Component {
    state={
        ischo:'1',
        me:'223',
        header:'Trade',
    };

    render() {
        return (
            <div>
                <div>
                    <Header header={this.state.header}/>
                    <div onClick={this.goUrl.bind(this,'/detail',{goods_id:1})}>去详情页</div>
                    <Foot ischo={this.state.ischo}/>
                </div>
            </div>
        )
    }
}
