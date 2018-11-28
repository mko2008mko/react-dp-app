import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import City from "./City/city-index";
import User from "./User/user-index";
import Search from "./Search/search-index";
import Detail from "./Detail/detail-index";
import NotFound from "./404";
import Home from "./Home/home-index";
import LocalStore from "../util/localStore";
import { CITYNAME } from "../config/localStoreKey";
import { connect } from "react-redux";
import { updateCity } from "../redux/userinfo.redux";
import "../static/css/common.less";
import '../static/css/font.css'
import Login from "./Login/login";

@connect(
    state => state.userinfo,
    { updateCity }
)
class App extends React.Component {

    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '北京';
        }

        this.props.updateCity({ cityName: cityName });

    }

    render() {
        return (

            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/city' component={City} />
                        <Route path='/user' component={User} />
                        <Route path='/search/:type/:keyword?' component={Search} />
                        <Route path='/detail/:id' component={Detail} />
                        <Route path='/login/:router?' component={Login}/>
                        <Route path='*' component={NotFound} />
                    </Switch>
                </BrowserRouter>
            </div>

        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default NotFound
export default App
// module.exports = NotFound