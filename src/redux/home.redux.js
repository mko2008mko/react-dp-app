const CATEGORY_LIST = "CATEGORY_LIST";
const AD_LIST = "AD_LIST";
const RECOMMEND_LIST = "RECOMMEND_LIST";
const LOAD_MORE = "LOAD_MORE";

const initState = {
    categoryData: [],
    adData: [],
    recommendData: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
};

export function homedata(state = initState, action) {
    switch (action.type) {
        case CATEGORY_LIST:
            return { ...state, categoryData: action.data };
        case AD_LIST:
            return { ...state, adData: action.data };
        case RECOMMEND_LIST:
            return {
                ...state,
                recommendData: state.recommendData.concat(action.data.data),
                hasMore: action.data.hasMore, isLoadingMore: false,
                page: state.page + 1
            };
        case LOAD_MORE:
            return { ...state, isLoadingMore: true };
        default:
            return state;
    }
}

function categorylist(data) {
    return { type: CATEGORY_LIST, data };
}

export function getCategoryList() {
    return dispatch => {
        setTimeout(() => {
            let data = require("../config/category");
            dispatch(categorylist(data))
        }, 500);
    }
}

function adList(data) {
    return { type: AD_LIST, data };
}

export function getAdList() {
    return dispatch => {
        setTimeout(() => {
            let data = require("../config/ad");
            dispatch(adList(data));
        }, 1000);
    }
}

function recommendList(data) {
    return { type: RECOMMEND_LIST, data };
}

export function getRecommendList() {
    return dispatch => {
        setTimeout(() => {
            let data = require("../config/list");
            dispatch(recommendList(data));
        }, 1000);
    }
}

export function updateLoadMore() {
    return { type: LOAD_MORE };
}


