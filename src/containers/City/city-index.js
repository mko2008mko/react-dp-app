import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/header";
import CurrentCity from "../../components/CurrentCity/current-city";
import CityList from "../../components/CityList/city-list";
import { updateCity } from "../../redux/userinfo.redux";
import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

@connect(
    state => state.userinfo,
    { updateCity }
)
class City extends React.Component {

    changeCity = (newCity) => {
        if (newCity == null) {
            return;
        }
        this.props.updateCity({ cityName: newCity });
        // 修改 cookie
        localStore.setItem(CITYNAME, newCity);
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <Header title="选择城市" />
                <CurrentCity cityName={this.props.cityName} />
                <CityList changFn={this.changeCity.bind(this)} />
            </div>
        );
    }

}

export default City;