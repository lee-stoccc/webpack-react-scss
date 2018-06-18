import React from 'react';
import './mine.css';
import Foot from  '../com/Foot'
import Header from '../com/Header/Header'

export default class Mine extends React.Component {
    state={
        ischo:'2',
        me:'223',
        header:'Mine',
        names:'',
        job:'',
        age:'',
        address:'',
        tel:""
    };
    nameInput(n,e){
        switch (n){
            case 'names':
                this.setState({
                    names:e.target.value
                });
                break;
            case 'job':
                this.setState({
                    job:e.target.value
                });
                break;
            case 'address':
                this.setState({
                    address:e.target.value
                });
                break;
            case 'tel':
                this.setState({
                    tel:e.target.value
                });
                break;
            case 'age':
                this.setState({
                    age:e.target.value
                });
                break;
        }


        this.setState({
            name:e.target.value
        })
    }

    sub(){
        this.$axios.get('/index/Female/saveInfo',{params:{
            tel:this.state.tel,
            name:this.state.names,
            age:this.state.age,
            job:this.state.job,
            address:this.state.address
        }}).then(function (res) {
            console.log(res)
        })
    };
    render() {
        return (
            <div>
                <Header header={this.state.header}/>
                <div>
                    <input type="text" onChange={this.nameInput.bind(this,'names')} />
                    <span>{this.state.names}</span>
                </div>
                <div>
                    <input type="text" onChange={this.nameInput.bind(this,'age')} />
                    <span>{this.state.age}</span>
                </div>
                <div>
                    <input type="text" onChange={this.nameInput.bind(this,'address')} />
                    <span>{this.state.address}</span>
                </div>
                <div>
                    <input type="text" onChange={this.nameInput.bind(this,'job')} />
                    <span>{this.state.job}</span>
                </div>
                <div>
                    <input type="text" onChange={this.nameInput.bind(this,'tel')} />
                    <span>{this.state.tel}</span>
                </div>
                <div><button onClick={this.sub.bind(this)}>提交</button></div>
                <Foot ischo={this.state.ischo}/>
            </div>
        )
    }
}
