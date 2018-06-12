/**
 * Created by Administrator on 2018/6/12 0012.
 */
import React from 'react';
import './Select.css';

export default class Select extends React.Component {
    constructor(props){
        super(props);
        this.state={
            select_isShow_1:true,
            select_isShow_2:true,
            select_isShow_3:true,
            select_number_1:[1,2,3,4,5,6],
            select_number_2:['A','B','C'],
            select_number_3:['a','b','c','d'],
            select_cho_1:'',
            select_cho_2:'',
            select_cho_3:''
        }
    }

    select_isShow_1(){
        this.setState({
            select_isShow_1:!this.state.select_isShow_1
        })
    };
    select_isShow_2(){
        this.setState({
            select_isShow_2:!this.state.select_isShow_2
        })
    };
    select_isShow_3(){
        this.setState({
            select_isShow_3:!this.state.select_isShow_3
        })
    };
    showID_1(e){
        this.setState({
            select_isShow_1:!this.state.select_isShow_1,
            select_cho_1:e.target.id
        })
    };
    showID_2(e){
        this.setState({
            select_isShow_2:!this.state.select_isShow_2,
            select_cho_2:e.target.id
        })
    };
    showID_3(e){
        this.setState({
            select_isShow_3:!this.state.select_isShow_3,
            select_cho_3:e.target.id
        })
    };
    render() {
        return (
            <div>
                <div className="select_cho_1">
                    <div  onClick={()=>this.select_isShow_1()}>1</div>
                    <div onClick={()=>this.select_isShow_2()}>A</div>
                    <div onClick={()=>this.select_isShow_3()}>a</div>
                </div>
                <div className="select_cho_1 select_cho_2">
                    <div className={this.state.select_isShow_1===true?'select_isShow':''}>
                        {
                            this.state.select_number_1.map((i,index)=>{
                                return(
                                    <div key={i} id={index} onClick={this.showID_1.bind(this)} >{i}</div>
                                )
                            })
                        }
                    </div>

                    <div className={this.state.select_isShow_2===true?'select_isShow':''}>
                        <div>
                            {
                                this.state.select_number_2.map((i,index)=>{
                                    return(
                                        <div key={i} id={index} onClick={this.showID_2.bind(this)}>{i}</div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className={this.state.select_isShow_3===true?'select_isShow':''}>
                        <div>
                            {
                                this.state.select_number_3.map((i,index)=>{
                                    return(
                                        <div key={i} id={index} onClick={this.showID_3.bind(this)} >{i}</div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
