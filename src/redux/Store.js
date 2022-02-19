import { createStore,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
import GlobalReducers from "./reducers";
const MiddleWare = [thunk]
const Store = createStore(GlobalReducers,{todos:[
    {name:"todo 1",isCompleted:true},
    {name:"todo 2",isCompleted:false}
]
},
compose(applyMiddleware(...MiddleWare)))
export default Store;