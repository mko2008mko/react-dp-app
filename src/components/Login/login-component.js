import React from 'react'
import './style.less'

class LoginComponent extends React.Component {

    constructor(props) {
        super();
        this.state = {
            value: ""
        }
    }

    changeHandle = (e) => {
        const value = e.target.value;
        this.setState({ value: value });
    }

    render() {
        return (

            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.changeHandle}
                        value={this.state.value}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码" />
                </div>
                <button className="btn-login" onClick={() => { this.props.loginHandle(this.state.value) }}>登录</button>
            </div>


        )
    }
}


export default LoginComponent
