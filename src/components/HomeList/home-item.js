import React from "react";

class HomeItem extends React.Component {

    render() {

        const item = this.props.item;

        return item ? (
            <div className="recommend-item">
                <img src={item.img} alt=""/>
                <div className="recommend-center">
                    <h3>{item.title}</h3>
                    <p>{item.subTitle}}</p>
                    <p>¥{item.price}</p>
                </div>

                <div className="recommend-right">
                    <p>{item.distance}</p>
                    <p>已售{item.mumber}</p>
                </div>

            </div>
        ) : null;
    }
}

export default HomeItem;