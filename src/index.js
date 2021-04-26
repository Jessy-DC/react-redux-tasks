import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from "redux";
import tasksApp from './reducers/tasks'
import {addTask, delTask, setVisibilityFilter, VisibilityFilters} from "./actions/tasks";

const store = createStore(tasksApp);
console.log(store.getState());

const unsubscribe = store.subscribe(() => {console.log(store.getState());})

store.dispatch(addTask('FIRST TASK'))
store.dispatch(addTask('SECOND TASK'))
store.dispatch(addTask('GO SHOPPING'))
store.dispatch(addTask('GO SWIMMING POOL'))

store.dispatch(delTask(0))
store.dispatch(delTask(1))

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_DELETED))

unsubscribe();
