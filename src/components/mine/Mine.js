import React from 'react';
import './mine.css';
import Foot from  '../com/Foot'
import Header from '../com/Header/Header'

export default class Mine extends React.Component {
    state={
        ischo:'2',
        me:'223',
        header:'Mine',
        name:''
    };
    nameInput(e){
        this.setState({
            name:e.target.value
        })
    }
    render() {
        return (
            <div>
                <Header header={this.state.header}/>
                <div>
                    <input type="text" onChange={this.nameInput.bind(this)}/>
                    <span>{this.state.name}</span>
                </div>
                <div><button>提交</button></div>
                <Foot ischo={this.state.ischo}/>
            </div>
        )
    }
}
