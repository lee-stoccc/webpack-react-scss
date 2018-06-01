import React, { Component } from 'react';
import Classes from './components/class/Classes.js';
import Person from './components/person/Person.js'
import If from './components/if/If.js'
import Fors from './components/for/For.js'
import './App.css';

class App extends Component {
    state={
        name:'父组件的'
    };
    father=(name)=>{
        console.log(name)
    };
  render() {
    return (
      <div className="App">
          {/*// 组件携带属性和方法 传递给子组件*/}
          <Classes/>
          <Person name="person1"  father={this.father.bind(this,this.state.name)}>我是React</Person>
          <If/>
          <Fors/>
      </div>
    );
  }
}

export default App;
