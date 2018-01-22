import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList } from 'react-native'
import ListItem from './ListItem'

class LibraryList extends Component {

	renderRow (libraryItem) {
		return <ListItem {...libraryItem.item}/>
	}

	render () {
		return (
			<FlatList
				data={this.props.libraries}
				renderItem={this.renderRow}
				keyExtractor={(library) => library.id}
			/>
		)
	}
}

const mapStateToProps = ({libraries}) => {
	return {libraries}
}

export default connect(mapStateToProps)(LibraryList)
