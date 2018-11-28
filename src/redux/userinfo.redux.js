

const USERINFO_UPDATE_CITY = 'USERINFO_UPDATE_CITY';
const USERINFO_UPDATE_NAME = 'USERINFO_UPDATE_NAME';

const LOGIN_USERINFO = 'LOGIN_USERINFO';
const ADD_STORE = 'ADD_STORE';
const REMOVE_STORE = 'REMOVE_STORE';

const initState = {
    cityName: '',
    userName: '',
    userStore: []
};

export function userinfo(state = initState, action) {
    switch (action.type) {
        case USERINFO_UPDATE_CITY:
            return { ...state, cityName: action.data.cityName };
        case USERINFO_UPDATE_NAME:
            return { ...state, userName: action.data };
        case LOGIN_USERINFO:
            return { ...state, userName: action.data };
        case ADD_STORE:
            return { ...state, userStore: state.userStore.add(action.data) };
        case REMOVE_STORE:
            return {
                ...state, userStore: state.userStore.filter(item => {
                    if (item !== action.data) {
                        return item;
                    }
                    return '';
                })
            };
        default:
            return state;
    }
}

export function updateCity(data) {
    return { type: USERINFO_UPDATE_CITY, data };
}

export function updataUserName(data) {
    return { type: USERINFO_UPDATE_NAME, data }
}

function loginSuccess(data) {
    return { type: LOGIN_USERINFO, data };
}

export function login(data) {
    return dispatch => {
        setTimeout(() => {
            dispatch(loginSuccess(data));
        }, 1000);
    }
}

function addStoreSuccess(data) {
    return { type: ADD_STORE, data };
}

function removeStoreSuccess(data) {
    return { type: REMOVE_STORE, data };
}

export function addStore(id) {
    return dispatch => {
        setTimeout(() => {
            addStoreSuccess(loginSuccess(id));
        }, 1000);
    }
}

export function removeStore(id) {
    return dispatch => {
        setTimeout(() => {
            addStoreSuccess(removeStoreSuccess(id));
        }, 1000);
    }
}