import React from "react";
import { connect } from "react-redux";
import { getCommentData } from "../../../redux/detail.redux";
import LoadMore from "../../../components/LoadMore/load-more";

import ListComment from "../../../components/CommentList/comment-list";
import "./style.less";

@connect(
    state => state.detailinfo,
    { getCommentData }
)
class DetailComent extends React.PureComponent {

    componentDidMount() {
        const id = this.props.bsId;
        const page = this.props.page;
        this.props.getCommentData(id,page);
    }

    loadMoreData = () => {
        const page = this.props.page;
        const id = this.props.bsId;
        this.props.getCommentData(id,page);
    }

    render() {

        const commentData = this.props.commentData;
        // if(commentData==null){
        //     return null;
        // }

        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    commentData.length
                        ? <ListComment data={commentData} />
                        : null
                }
                {
                    this.props.hasMore
                        ? <LoadMore isLoadingMore={this.props.isLoadingMore}
                            loadMoreFn={this.loadMoreData} />
                        : null}
            </div>
        );
    }
}

export default DetailComent;

