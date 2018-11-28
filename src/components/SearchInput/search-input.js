import React from 'react';
import "./style.less";

class SearchInput extends React.Component {

    constructor(props) {
        super();
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        const value = this.props.value || '';
        this.setState({ value: value });
    }

    changeHandle = (e) => {
        let val = e.target.value
        this.setState({ value: val });
    }

    keyUpHnadle = (e) => {
        if (e.keyCode !== 13) {
            return;
        }
        this.props.enterHandle(this.state.value);
        // this.props.history.push('/search/all/' + encodeURIComponent(this.state.kwd));
    }

    render() {
        return (
            <input className="search-input"
                type="text"
                placeholder="请输入关键字"
                onChange={this.changeHandle}
                value={this.state.value}
                onKeyUp={this.keyUpHnadle} />
        )
    }
}


export default SearchInput;
