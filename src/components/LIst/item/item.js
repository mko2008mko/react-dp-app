import React from "react";
import { Link } from "react-router-dom"
import "./style.less";

class Item extends React.PureComponent {

    render() {

        const item = this.props.item;
        return item ? (
            <Link to={`/detail/${item.price}`}>
            <div className="recommend-item">
                
                    <img src={item.img} alt="" />
                    <div className="recommend-center">
                        <h3>{item.title}</h3>
                        <p>{item.subTitle}</p>
                        <p>¥{item.price}</p>
                    </div>

                    <div className="recommend-right">
                        <p>{item.distance}</p>
                        <p>已售{item.mumber}</p>
                    </div>
               
            </div>
            </Link>
        ) : null;
    }

}

export default Item;