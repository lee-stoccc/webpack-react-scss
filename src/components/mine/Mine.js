import React from 'react';
import './mine.css';
import Foot from  '../com/Foot'
import Header from '../com/Header/Header'

export default class Mine extends React.Component {
    state={
        ischo:'2',
        me:'223',
        header:'Mine'
    };
    render() {
        return (
            <div>
                <Header header={this.state.header}/>
                <div></div>
                <Foot ischo={this.state.ischo}/>
            </div>
        )
    }
}
