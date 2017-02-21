import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'

import {
	createStore,
	applyMiddleware
} from 'redux'

import createLogger from 'redux-logger'

import { submitNewOrder,beginTransaction } from './actions/actions'

import {app} from './reducers/reducers'
import App from './components/App';
import { Provider } from 'react-redux'

const loggerMiddleware = createLogger()

const store = createStore(
	app,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware // neat middleware that logs actions
	)
)

//store.dispatch(beginTransaction());
/*store.dispatch(submitNewOrder({
	email: 'lucadonadi.tv@gmail.com',
	name: 'luca',
	surname: 'donadi',
	address: 'bla bla bla',
	payment: {}
})).then(() =>
	console.log(store.getState())
)*/

ReactDOM.render( <Provider store={store}>
    <App />
  </Provider> ,
	document.getElementById('root')
);