import React from "react";

import "./style.less";

class Stars extends React.PureComponent {

    render() {

        let star = this.props.star || 0;
        if (star > 5) {
            star = star % 5;
        }

        return (
            <div className="star-container">
                {[1, 2, 3, 4, 5].map((item, index) => {
                    const lightClass = star >= item ? ' light' : '';
                    return <i key={index} className={`icon-star${lightClass}`} ></i>
                })}
            </div>
        );
    }
}

export default Stars;

