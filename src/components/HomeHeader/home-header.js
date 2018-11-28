import React from "react";
import './style.less';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import SearchInput from "../../components/SearchInput/search-input";

@connect(
    state => state.userinfo,
)
@withRouter
class HomeHeader extends React.Component {

    constructor(props) {
        super();
        this.state = {
            kwd: ''
        }
    }

    enterHandle = (kwd) => {
        this.props.history.push('/search/all/' + encodeURIComponent(kwd));
    }

    render() {
        return (
            <header id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to={`/city`}>
                        <span>{this.props.cityName}</span>
                        &nbsp;
                    <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to={`/login`}>
                        <i className="icon-user"></i>
                    </Link>
                </div>

                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)} />

                    </div>
                </div>

            </header>
        );
    }

}

export default HomeHeader;