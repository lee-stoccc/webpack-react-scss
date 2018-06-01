import React,{Component} from 'react'
import './if.css'
class If extends Component{
    state={
        dot:true
    };
    tog=()=>{
        alert(3);
      this.setState({
          dot:!this.state.dot
      })
    };

    render(){
        return(
            <div>
                {/*if分支切换*/}
            {  this.state.dot?
                     <div onClick={()=>this.tog()}>if分支demo</div>:
                   <div onClick={()=>this.tog()}>切换if分支demo</div>
            }
            </div>
        )
    }
}

export default If