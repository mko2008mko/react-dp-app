import React from "react";
import "./style.less";

class Header extends React.PureComponent {

    clickHandle = () => {
        window.history.back();
    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default Header;