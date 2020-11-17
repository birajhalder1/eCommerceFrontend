import { combineReducers } from "redux";
import authReducer from "./authReducer";
import medicineReducer from "./medicineReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  auth: authReducer,
  medicines: medicineReducer,
  orders: orderReducer
});
