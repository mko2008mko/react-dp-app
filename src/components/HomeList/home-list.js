import React from "react";
import { connect } from "react-redux";
import { getRecommendList,updateLoadMore } from "../../redux/home.redux";
import HomeItem from "./home-item"
import LoadMore from "../LoadMore/load-more";

import "./style.less";

@connect(
    state => state.homedata,
    { getRecommendList,updateLoadMore }
)
class HomeList extends React.Component {

    constructor(props) {
        super();     
    }

    componentDidMount() {
        this.props.getRecommendList();
    }


    loadMoreData = () => {

        this.props.updateLoadMore()
        this.props.getRecommendList();


    }

    render() {
        const list = this.props.recommendData;
    
        if (list == null) {
            return null;
        }
    
        return (
            <div>
                <h3 className="recommend-title">猜你喜欢</h3>
                <div className="recommend-list">
                    {list.length ? list.map((v,i) => (
                        <HomeItem key={i} item={v} />
                    )) : null}
                </div>
                {this.props.hasMore
                    ? <LoadMore isLoadingMore={this.props.isLoadingMore}
                        loadMoreFn={this.loadMoreData} />
                    : null}
            </div>
        );
    }
}

export default HomeList;