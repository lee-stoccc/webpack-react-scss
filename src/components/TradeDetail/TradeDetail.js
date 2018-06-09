import React from 'react'
import Foot from  '../com/Foot'
import Header from '../com/Header/Header'
import './TradeDetail.css'

export default class TradeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: 'TradeDetail',
            goods_id: this.props.location.state.goods_id,
            ischo: '1',
            type:this.props.location.state.goods_id
        }
    };


    render() {
        const show={
            display:''
        };
        const dis={
            display:'none'
        };
        return (
            <div>
                <div>
                    <Header header={this.state.header}/>
                    <div className="bule" style={this.state.type=='0'?this.show:this.dis}>one</div>
                    <div className="bule" style={this.state.type=='1'?this.show:this.dis}>two</div>
                    <div className="bule" style={this.state.type=='2'?this.show:this.dis}>three</div>
                    <div className="bule" style={this.state.type=='3'?this.show:this.dis}>four</div>
                    <Foot ischo={this.state.ischo}/>
                </div>
            </div>
        )
    }
}