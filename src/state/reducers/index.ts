import { combineReducers } from "redux";
import respositoryReducer from "./repositoriesReducer";

const reducer = combineReducers({
  repositories: respositoryReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
