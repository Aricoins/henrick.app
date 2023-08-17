import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk" 
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


//  const composeRedux = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducer, composeRedux(applyMiddleware(thunk)))

 const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


export default store;