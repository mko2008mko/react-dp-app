import React from "react";
import { connect } from "react-redux";
import { getInfoData } from "../../../redux/detail.redux";
import DetailInfo from "../../../components/DetailInfo/detail-info";

import "./style.less";


@connect(
    state => state.detailinfo,
    { getInfoData }
)
class Info extends React.Component {

    componentDidMount() {
        const id = this.props.bsId;
        this.props.getInfoData(id);
    }

    render() {

        const infoData = this.props.infoData;
        return infoData ? (
            <DetailInfo data={infoData} />
        ) : null;
    }
}

export default Info;