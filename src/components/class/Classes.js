import React,{Component}from 'react';
import './classes.css'

class Classes extends Component {
    state={
        dot:true,
        none:''
    };
    tog=()=>{
        this.setState({
            dot:!this.state.dot
        });
        if(this.state.dot===false){
           this.setState({
               none:'none'
           })
        }else {
            this.setState({
                none:''
            })
        }
    };

    render(){
        const colred={
          fontSize:"99px"
        };

        const dis={
            display:this.state.none
        };
        // 绑定类   和       绑定行内style
        return(
            <div>
                <div className="bg col_1" style={colred} >sf</div>
                                                                       {/*// 动态绑定类*/}
                <div onClick={this.tog.bind(this)} className={this.state.dot===true?'bg':'col_2'} >动态绑定类 </div>
                                                      {/*动态绑定style，实现隐藏和显示*/}
                <div onClick={this.tog.bind(this)} style={dis}>动态绑定style样式 </div>
            </div>
        )
    }

}

export default Classes