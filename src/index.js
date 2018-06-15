import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Index from './components/Index/Index.js'
import Trade from './components/Trade/Trade.js'
import Mine from './components/mine/Mine.js'
import Alert from './components/com/Alert/Alert'
import Select from './components/com/select/Select'
import TradeDetail from './components/TradeDetail/TradeDetail'
import FemaleDetail from './components/FemaleDetail/FemaleDetail'

React.Component.prototype.$axios=axios;
axios.defaults.baseURL = 'http://localhost/tp5/public/index.php';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// React的Component方法 的 原型对象上添加方法
React.Component.prototype.goUrl=function (paths,par) {
        let that = this;
        that.props.history.push({pathname:`${paths}`,state:par});
};

// 弹框函数
React.Component.prototype.Alert=function (isShow,con_text) {
        let t =this;
        t.setState({
            isShow:isShow,
            con_text:con_text
        },function () {
            setTimeout(function () {
                t.setState({
                    isShow:'0'
                })
            },2000)
        });
};
// 定义隐藏常量
React.Component.prototype.dis={
    display:'none'
};
// 定义显示常量
React.Component.prototype.show={
    display:''
};


ReactDOM.render(
    <Router>
         <Switch>
             <Route path="/app" component={App} />
             <Route path="/" exact component={Index} />
             <Route path="/trade"   component={Trade}/>
             <Route path="/mine"   component={Mine}/>
             <Route path="/alert" component={Alert}/>
             <Route path='/detail' component={TradeDetail}/>
             <Route path='/select' component={Select}/>
             <Route path='/FemaleDetail' component={FemaleDetail}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();