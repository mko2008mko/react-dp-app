import React from "react";
import SearchHeader from "../../components/SearchHeader/search-header";
import List from "../../components/LIst/list";
import { connect } from "react-redux";
import { getSearchResult,searchLoadMore,clearSearchData } from "../../redux/search.redux";
import LoadMore from "../../components/LoadMore/load-more";

@connect(
    state=>state.searchresult,
    {getSearchResult,searchLoadMore,clearSearchData}
)
class Search extends React.Component {

    componentDidMount() {
        // console.log(this.props.match.params.type);
        // console.log(this.props.match.params.keyword);
        this.props.getSearchResult();
    }


    loadMoreData = () => {
        this.props.searchLoadMore()
        this.props.getSearchResult();
    }

    componentDidUpdate(pp,ps){
        // console.log(pp.keyword);
        // console.log(this.props.keyword);
        if(this.props.keyword=== pp.keyword){
            // console.log("-----");
            return 
        }
        this.props.clearSearchData();
        this.props.getSearchResult();

    }



    render() {
        const list = this.props.searchData;
    
        if (list == null) {
            return null;
        }

        return (
            <div>
                <SearchHeader keyword={this.props.match.params.keyword} />
                <List list={list}/>
                {this.props.hasMore
                    ? <LoadMore isLoadingMore={this.props.isLoadingMore}
                        loadMoreFn={this.loadMoreData} />
                    : null}
            </div>
        );
    }

}

export default Search;