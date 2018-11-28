import React from "react";

import "./style.less";

class LoadMore extends React.Component {

    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper;
        let timeId;
        window.addEventListener('scroll', () => {
            if (timeId) {
                clearTimeout(timeId);
            }
            timeId = setTimeout(() => {
                const top = wrapper.getBoundingClientRect().top;
                const windowHeight = window.screen.height;
                if (top && top < windowHeight) {
                    loadMoreFn();
                }
            }, 50);

        }, false)
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.props.loadMoreFn}>加载更多</span>}

            </div>
        );
    }
}

export default LoadMore;