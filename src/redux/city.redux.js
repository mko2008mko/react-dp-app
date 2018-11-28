const CITY_LIST = "CITY_LIST";

const initState = {
    cityListData: []
}

export function citylist(state = initState, action) {
    switch (action.type) {
        case CITY_LIST:
            return { ...state, cityListData: action.data }
        default:
            return state;
    }
}

function cityListSucess(data) {
    return { type: CITY_LIST, data }
}

export function getCityList() {
    return dispatch => {
        setTimeout(() => {
            const data = require("../config/city");
            dispatch(cityListSucess(data));
        }, 1000);
    }
}