import React from 'react'
import Header from '../../components/Header/header';
import { connect } from 'react-redux';
import LoginComponent from '../../components/Login/login-component';
import { updataUserName,login } from "../../redux/userinfo.redux";

@connect(
    state => state.userinfo,
    { updataUserName,login }
)
class Login extends React.Component {

    constructor(props) {
        super();
        this.state = {
            checking: true
        }
    }

    componentDidMount() {
        const userName = this.props.userName;
        if (userName) {
            this.props.history.push('/user');
        } else {
            this.setState({ checking: false });
        }
    }

    loginHandle = (val) => {
        // this.props.updataUserName(val);
        this.props.login(val);
       

    }

    redirect =()=>{
        const router = this.props.match.params.router;
        if (router) {
            console.log(this.props);
            this.props.history.push(router)
        } else {
            this.props.history.push('/user');
        }
    }

    componentDidUpdate(preProps,preState){
        if(this.props.userName&&this.props.userName!==preProps.userName){
            this.redirect();
        }
    }

    render() {
     

        return (
            <div>
                <Header title="登录" />
                {
                    this.state.checking
                        ? null
                        : <LoginComponent loginHandle={this.loginHandle} />
                }

            </div>
        )
    }
}


export default Login
