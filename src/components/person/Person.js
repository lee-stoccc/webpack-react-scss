import React,{Component} from 'react'
// import './person.css'
// 第一种方法是写一个类，但必须继承于Component
class Person extends Component {
        constructor(props){

          super(props);
          props={}
        };
    state={  //相当于小程序和vue 的data
        persons:[
            {name:'A',age:32},
            {name:'B',age:32}
        ],
        job:123
    };

    say=(newName)=>{   //箭头函数  react 方法直接写
      this.setState(   // setState 更改值  相当于小程序的setData 函数
          {persons:[{name:newName}]}
      )
    };
    render(){
        return(
            // 绑定事件  ， 箭头函数传值
            <div onClick={()=>this.say('李剑钎')}>
               <p>我是{this.state.persons[0].name}组件</p>
                <p>{this.state.job}</p>
                {/*拿到props 传过来的值*/}
                <p>{this.props.name}</p>
                <p onClick={this.props.father}>{this.props.children}</p>
            </div>
         )
    }
}
// export default Person

//第二种方法是写一个函数方法
// const person= (props) =>{
//     return <div>
//         <p>我是{props.name}组件</p>
//             <p>{props.children}</p>
//         </div>(
//
//     )
// }

export default Person