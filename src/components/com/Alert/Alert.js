import React from 'react'
import './alert.css'


export default class Alert extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className={this.props.isShow==='1'?'dis_show':'dis'}>
                <div>
                    {this.props.con_text}
                </div>
            </div>
        )
    }
}