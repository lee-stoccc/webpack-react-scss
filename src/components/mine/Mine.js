import React from 'react';
import './mine.css';
import Foot from  '../com/Foot'


export default class Mine extends React.Component {

    render() {
        return (
            <div>
                <div>个人中心</div>
                <Foot ischo={this.props.location.state.ischo}/>
            </div>
        )
    }
}
