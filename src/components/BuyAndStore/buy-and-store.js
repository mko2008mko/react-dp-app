import React from 'react'

class BuyAndStore extends React.Component {
    // constructor(props, context) {
    //     super(props, context);
    // }
    render() {
        return (
            <div>
                <button
                    onClick={() => { this.props.buyHandle() }}
                >购买</button>
                <button
                    onClick={() => { this.props.storeHandle() }}
                >收藏</button>
            </div>
        )
    }
}


export default BuyAndStore;
