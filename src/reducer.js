import { combineReducers } from "redux";
import { userinfo } from "./redux/userinfo.redux";
import { homedata } from "./redux/home.redux";
import { citylist } from "./redux/city.redux";
import { searchresult } from "./redux/search.redux";
import { detailinfo } from "./redux/detail.redux";

export default combineReducers({ userinfo, homedata, citylist, searchresult, detailinfo });