const DETAIL_INFO = "DETAIL_INFO";
const DETAIL_COMMENT = "DETAIL_COMMENT";
const COMMENT_LOADER_MORE = "COMMENT_LOADER_MORE";

const initState = {
    infoData: null,
    commentData: [],
    isLoadingMore: false,
    hasMore: false,
    page: 0
}

export function detailinfo(state = initState, action) {
    switch (action.type) {
        case DETAIL_INFO:
            return { ...state, infoData: action.data }
        case DETAIL_COMMENT:
            return {
                ...state, commentData: state.commentData.concat(action.data.data),
                hasMore: action.data.hasMore, isLoadingMore: false, page: state.page + 1
            }
        case COMMENT_LOADER_MORE:
            return { ...state, isLoadingMore: true }
        default:
            return state;
    }
}

function infoSuccess(data) {
    return { type: DETAIL_INFO, data };
}

export function getInfoData(id) {
    console.log(id);
    return dispatch => {
        setTimeout(() => {
            const data = require("../config/info");
            dispatch(infoSuccess(data))
        }, 1000);
    }

}

function commentSuccess(data) {
    return { type: DETAIL_COMMENT, data }
}

function commnetLoadeMore() {
    return { type: COMMENT_LOADER_MORE };
}

export function getCommentData(id,page) {
    console.log(page);
    return dispatch => {
        dispatch(commnetLoadeMore())
        setTimeout(() => {
            const data = require("../config/comment");
            dispatch(commentSuccess(data));
        }, 1000);
    }
}