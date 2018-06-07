import React from 'react';
import './Trade.css';
import Foot from  '../com/Foot'


export default class Trade extends React.Component {

    render() {
        return (
            <div>
                <div>交易中心</div>
                <Foot ischo={this.props.location.state.ischo}/>
            </div>
        )
    }


}
