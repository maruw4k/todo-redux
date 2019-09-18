import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(reducer, ["Use Redux"], composeWithDevTools());

export default store;
