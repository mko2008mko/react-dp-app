import React from "react";
import HomeHeader from "../../components/HomeHeader/home-header";
import HomeCategory from "../../components/Category/home-category";
import HomeAD from "../../components/HomeAd/home-ad";
import HomeList from "../../components/HomeList/home-list";

class Home extends React.Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <HomeCategory />
                <HomeAD />
                <HomeList />
            </div>
        );
    }

}

export default Home;