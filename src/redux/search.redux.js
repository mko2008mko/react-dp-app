const SEARCH_RESULT = "SEARCH_RESULT";
const SEARCH_LOADER_MORE = "SEARCH_LOADER_MORE";
const SEARCH_KEYWORD = "SEARCH_KEYWORD";
const CLEAR_DATA = "CLEAR_DATA";

const initState = {
    searchData: [],
    hasMore: false,
    isLoadingMore: false,
    keyword: ''
}

export function searchresult(state = initState, action) {
    switch (action.type) {
        case SEARCH_RESULT:
            return {
                ...state, searchData: state.searchData.concat(action.data.data)
                , hasMore: action.data.hasMore, isLoadingMore: false
            }
        case SEARCH_LOADER_MORE:
            return { ...state, isLoadingMore: true };
        case SEARCH_KEYWORD:
            return { ...state, keyword: action.kwd };
        case CLEAR_DATA:
            return initState;
        default:
            return state;
    }
}

function searchSucces(data) {
    return { type: SEARCH_RESULT, data };
}

export function getSearchResult() {
    return dispatch => {
        setTimeout(() => {
            const data = require("../config/searc_list");
            dispatch(searchSucces(data))
        }, 1000);
    }
}

export function searchLoadMore() {
    return { type: SEARCH_LOADER_MORE };
}

export function addKeyoWrod(kwd) {
    return { type: SEARCH_KEYWORD, kwd };
}

export function clearSearchData() {
    return { type: CLEAR_DATA };
}

