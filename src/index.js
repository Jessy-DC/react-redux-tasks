import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import {createLogger} from "redux-logger/src";

import tasksApp from './reducers'

//Middleware logger redux
const logger = createLogger();

const store = createStore(tasksApp, applyMiddleware(thunk, logger))

console.log("INITIAL STATE REDUX" , store.getState())

const unsubscribe = store.subscribe(()=> console.log(store.getState()))
/*
store.dispatch(addTask('MA premier tache'))
store.dispatch(addTask('MA 2 tache'))
store.dispatch(addTask('aller faire des course'))
store.dispatch(addTask('allez me baigner'))

store.dispatch(delTask(0))
store.dispatch(delTask(1))

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_DELETED))
*/
//unsubscribe();

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
