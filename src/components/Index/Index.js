import React from 'react';
import './index.css';
import Foot from  '../com/Foot'
import Alert from '../com/Alert/Alert'
import Header from '../com/Header/Header'
import Banner from '../com/Foot'

export default class Index extends React.Component{
    state={
        ischo:'0',
        header:'Index',
        classType:'positions',
        classType_footer:'foot_t',

    };

    render(){
        return(
            <div>
                <Header header={this.state.header} />
                <div className='swiper'><img src={require('../../../src/staic/imgs/swiper01.jpg')} /></div>
                <div className='index_chodis'>
                    <div>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-2.png')} alt=""/></div>
                        <div className='icon_text'>房产</div>
                    </div>
                    <div>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-3.png')} alt=""/></div>
                        <div className='icon_text'>跑车</div>
                    </div>
                    <div>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-4.png')} alt=""/></div>
                        <div className='icon_text'>旅游</div>
                    </div>
                    <div>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-5.png')} alt=""/></div>
                        <div className='icon_text'>女性</div>
                    </div>
                </div>
                <div onClick={this.Alert.bind(this,'1','登录成功')} className='click'>点击弹框事件</div>
                <Foot ischo={this.state.ischo}  className={this.state.classType_footer}/>
                <Alert isShow={this.state.isShow} con_text={this.state.con_text} />
            </div>
        )
    }
}
Index.defaultProps = {
    header: 'indexs'
};
