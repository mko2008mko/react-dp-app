import React from "react";
import CommentItem from "./item/item";

import "./style.less";

class CommentList extends React.PureComponent {

    render() {
        // 获取数据
        const data = this.props.data

        return (
            <div className="comment-list">
                {data.map((item, index) => {
                    return <CommentItem key={index} data={item} />
                })}
            </div>
        );
    }
}

export default CommentList;

