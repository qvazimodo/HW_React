import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import { thunk } from "./midelwares";
import  thunk  from "redux-thunk";
import  {persistStore, persistReducer}  from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ["messages"],
    whitelist: ["profile", "conversations"],
};

const persistreducer = persistReducer(
    persistConfig,
    combineReducers({
        profile: profileReducer,
        conversations: conversationsReducer,
        messages: messagesReducer,
    })
);

export const store = createStore(
    persistreducer,
    compose(
        applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);


export const persistor = persistStore(store);