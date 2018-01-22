/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import Main from './components/main'

export default class App extends Component<{}> {
	render () {
		return (
			<Provider store={createStore(reducers)}>
				{/* Added a component here to not worry about live reloading and the store */}
				<Main/>
			</Provider>
		)
	}
}
