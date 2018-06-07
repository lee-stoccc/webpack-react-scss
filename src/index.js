import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Index from './components/Index/Index.js'
import Trade from './components/Trade/Trade.js'
import Mine from './components/mine/Mine.js'

// React的Component方法 的 原型对象上添加方法
React.Component.prototype.goUrl=function (paths,par) {
        let that = this;
        that.props.history.push({pathname:`${paths}`,state:par});
};

ReactDOM.render(
    <Router>
         <Switch>
             <Route path="/app" component={App} />
             <Route path="/indexs" component={Index} />
             <Route path="/trade" component={Trade}/>
             <Route path="/mine" component={Mine}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();