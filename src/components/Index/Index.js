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
        indexs:[],
        foots:[]

    };
    getdatas(){
        this.$axios.get(
          '/index/order/getAll'
        ).then(function (res) {
            console.log(res.data)
        })
    };
    componentWillMount(){
        let t=this;
        this.$axios.get(
            '/index/Indexconfig/get_index_config',
            {params:{mini_id:1}}
        ).then(function (res) {
            let footer=[];
            let index=[];
            footer=res.data.index_foot.split('|');
            index=res.data.index_name.split('|');
            t.setState({
                indexs:index,
                foots:footer
            })
        });
    };
    render(){
        return(
            <div>
                <Header header={this.state.header} />
                <div className='swiper'><img src={require('../../../src/staic/imgs/swiper01.jpg')} /></div>
                <div className='index_chodis'>
                    <div>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-2.png')} alt=""/></div>
                        <div className='icon_text'>{this.state.indexs[0]}</div>
                    </div>
                    <div>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-3.png')} alt=""/></div>
                        <div className='icon_text'>{this.state.indexs[1]}</div>
                    </div>
                    <div>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-4.png')} alt=""/></div>
                        <div className='icon_text'>{this.state.indexs[2]}</div>
                    </div>
                    <div onClick={this.goUrl.bind(this,'FemaleDetail',{id:'list'})}>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-5.png')} alt=""/></div>
                        <div className='icon_text' >{this.state.indexs[3]}</div>
                    </div>
                </div>
                <div className='index_chodis'>
                    <div>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-2.png')} alt=""/></div>
                        <div className='icon_text'>{this.state.indexs[0]}</div>
                    </div>
                    <div>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-3.png')} alt=""/></div>
                        <div className='icon_text'>{this.state.indexs[1]}</div>
                    </div>
                    <div>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-4.png')} alt=""/></div>
                        <div className='icon_text'>{this.state.indexs[2]}</div>
                    </div>
                    <div onClick={this.goUrl.bind(this,'FemaleDetail',{id:'list'})}>
                        <div className='icon'><img src={require('../../../src/staic/imgs/2-5.png')} alt=""/></div>
                        <div className='icon_text' >{this.state.indexs[3]}</div>
                    </div>
                </div>
                <div onClick={this.Alert.bind(this,'1','登录成功')} className='click'>点击弹框事件</div>
                <div onClick={this.getdatas.bind(this)} className='click'>网络请求</div>
                <Foot ischo={this.state.ischo}  className={this.state.classType_footer} foots={this.state.foots}/>
                <Alert isShow={this.state.isShow} con_text={this.state.con_text} />
            </div>
        )
    }
}
Index.defaultProps = {
    header: 'indexs'
};
