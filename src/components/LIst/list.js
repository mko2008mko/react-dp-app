import React from "react";
import Item from "./item/item";

import "./style.less";

class List extends React.PureComponent {

    render() {

        const list = this.props.list;

        return (
            <div className="recommend-list">
                {list.length ? list.map((v, i) => (
                    <Item key={i} item={v} />
                )) : null}
            </div>
          
        );

    }

}

export default List;