import React from "react";
import { Grid } from "antd-mobile";
import "./style.less";
import { connect } from "react-redux";
import { getCategoryList } from "../../redux/home.redux";
import { withRouter } from "react-router-dom";

@connect(
    state => state.homedata,
    { getCategoryList }
)
@withRouter
class Category extends React.Component {

    constructor(props) {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        // console.log(categoryData);
        this.props.getCategoryList()
        // const data = categoryData.map((v) => ({ icon: v.img, text: v.text }))

        // this.setState({ data: data })
        // setTimeout(() => {
        //     window.dispatchEvent(new Event('resize'));
        // }, 0);

        setTimeout(function(){
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    render() {

        let categoryData = this.props.categoryData;
        categoryData
            ? categoryData = categoryData.map((v) => ({ icon: v.img, text: v.text }))
            : categoryData = [];

        return (
            <div>
                <Grid data={categoryData}
                    isCarousel={true}
                    autoplay
                    infinite={true}
                    onClick={_el => {
                        console.log(_el.text)
                        this.props.history.push(`/search/${_el.text}`)
                    }}
                    columnNum={5}
                    hasLine={false}
                />
            </div>
        );
    }

}

export default Category;