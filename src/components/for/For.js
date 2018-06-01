import React ,{Component}from 'react'

class Fors extends Component{
        state={
            list:[
                {name:'ljq1',age:14},
                {name:'ljq2',age:24},
                {name:'ljq3',age:34}
            ]
        };
        render(){

            return(
                 // for循环
                this.state.list.map((l,index)=>{
                    return <div name={l.name} key={index}>for 循环 {l.age}</div>
                })
            )
        }


}
export default Fors