import React from "react";
import "./style.less";
import { connect } from "react-redux";
import { getCityList } from "../../redux/city.redux";

@connect(
    state => state.citylist,
    { getCityList }
)
class CityList extends React.PureComponent {
    componentDidMount
        () {
        this.props.getCityList();
    }

    clickHandle = () => {
        window.history.back();
    }

    render() {
        const cityListData = this.props.cityListData;
        if (cityListData == null) {
            return null;
        }
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul>
                    {cityListData.length
                        ? cityListData.map((v, i) => (
                            <li key={i}
                                onClick={() => { this.props.changFn(v) }}
                            >
                                <span>{v}</span>
                            </li>
                        )) : null}
                </ul>
            </div>
        );
    }
}

export default CityList;