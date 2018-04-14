
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// require('./components/App');

import React from 'react';
import { render } from 'react-dom';
import Layout from './containers/Layout'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'

import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import {fetchCitiesIfNeeded,activityList,executorList} from './actions';

// const store = createStore(rootReducer,applyMiddleware(thunk,createLogger()));
const store = createStore(rootReducer,applyMiddleware(thunk));

store.dispatch(fetchCitiesIfNeeded());
store.dispatch(activityList());
store.dispatch(executorList());

render(<Provider store={store}>
    <Layout/>
    </Provider>,document.getElementById('app'));
