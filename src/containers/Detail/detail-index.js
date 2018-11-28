import React from "react";
import Header from "../../components/Header/header";
import Info from "./subpage/detail-info";
import Comment from "./subpage/detail-comment";
import BuyAndStore from "./subpage/detail_buy_store";

class Detail extends React.Component {

    componentDidMount() {

    }

    render() {
        const bsId = this.props.match.params;
        return (
            <div>
                <Header title="商户详情" />
                <Info bsId={bsId} />
                <BuyAndStore bsId={bsId} />
                <Comment bsId={bsId} />
            </div>
        );
    }

}

export default Detail;
