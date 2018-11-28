import React from 'react'
import SearchInput from "../../components/SearchInput/search-input";
import "./style.less";
import { addKeyoWrod } from "../../redux/search.redux";
import { connect } from "react-redux";

@connect(
    null,
    {addKeyoWrod}
)
class SearchHeader extends React.Component {
    // constructor(props, context) {
    //     super(props, context);
    // }

    clickHandle = () => {
        window.history.back();
    }

    enterHandle = (kwd) => {
        // console.log(kwd);
        this.props.addKeyoWrod(kwd)
    }

    render() {
        return (
            <div id="search-header">
                <span className="back-icon" onClick={this.clickHandle}>
                    <i className="icon-chevron-left"></i>
                </span>

                <div className="search-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput value={this.props.keyword||''} enterHandle={this.enterHandle.bind(this)} />

                    </div>
                </div>

            </div>
        )
    }
}


export default SearchHeader
