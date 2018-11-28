import React from 'react'
import BuyAndStoreComponent from "../../../components/BuyAndStore/buy-and-store";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

@connect(
    state => state.userinfo
)
@withRouter
class BuyAndStore extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isStore: false
        }
    }

    componentDidMount() {
        const userStore = this.props.userStore;
        const id = this.props.bsId.id;
        userStore.some(item => {
            if (item === id) {
                this.setState({ isStore: true });
                return true;
            }
            return false;
        })

    }

    

    buyHandle = () => {
        const isLogin = this.loginCheck();
        if (!isLogin) {
            return;
        }
        // 此过程为模拟购买，因此可省去复杂的购买过程

        // 跳转到用户主页
        this.props.history.push('/user');
    }

    storeHandle = () => {
        const isLogin = this.loginCheck();
        if (!isLogin) {
            return;
        }
    }

    loginCheck = () => {
        const id = this.props.bsId.id;
        const username = this.props.userName;
        if (!username) {
            // console.log(id);
            // console.log(encodeURIComponent('/detail/' + id))
            this.props.history.push('/login/' + encodeURIComponent('/detail/' + id));

            return false;
        }
        return true;
    }


    render() {
        return (
            <BuyAndStoreComponent isStore={this.state.isStore} buyHandle={this.buyHandle} storeHandle={this.storeHandle} />
        )
    }
}


export default BuyAndStore;
