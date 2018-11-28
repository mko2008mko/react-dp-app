import React from "react";
import { connect } from "react-redux";
import { getAdList } from "../../redux/home.redux";

import "./style.less";

@connect(
    state => state.homedata,
    { getAdList }
)
class HomeAD extends React.Component {

    componentDidMount() {
        this.props.getAdList();
    }

    render() {

        const adData = this.props.adData;
        return (
            <div id="home_ad">
                <div className="home_ad_title">
                    <h4>超值特惠</h4>
                </div>
                <ul>
                    {adData ? adData.map(v =>
                        (
                            <li key={v.title}>
                                <a href={v.link}>
                                    <img src={v.img} alt=""/>
                                </a>
                            </li>
                        )
                    ) : null}
                </ul>
            </div>
        );
    }
}

export default HomeAD;