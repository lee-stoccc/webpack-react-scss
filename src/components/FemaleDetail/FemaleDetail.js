import React from 'react'
import './femailDetail.css'

export default class FemaleDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        // 路由传入的id 值
        let t = this;
        t.$axios.get('/index/Female/getFemaleInfo', {
            params: {
                id: this.props.location.state.id
            }
        }).then(function (res) {
            t.setState({
                list: res.data.data
            })
        })
    }

    getDetalInfo(n) {
        this.$axios.get('/index/Female/getFemaleInfo', {
            params: {
                id: n
            }
        }).then(function (res) {
            console.log(res)
        })
    }

    render() {
        return (
            this.state.list.map((i, index) => {
                return (
                    <div key={index} id={i.id} onClick={this.getDetalInfo.bind(this, i.id)}>
                        <div>img</div>
                        <div className='text'>
                            <div>{i.f_name}</div>
                            <div>{i.f_job}</div>
                            <div>{i.f_age}</div>
                            <div>{i.f_address}</div>
                        </div>

                        <br/>
                    </div>
                )
            })
        )
    }


}