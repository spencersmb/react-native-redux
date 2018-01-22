import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native'
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {

	componentWillUpdate () {
		LayoutAnimation.spring()
	}

	_onPressHandler () {
		this.props.selectLibrary(this.props.id)
	}

	renderDesc () {
		return (
			<CardSection>
				<Text style={styles.description}>{this.props.description}</Text>
			</CardSection>
		)
	}

	render () {
		const {title, expanded} = this.props
		return (
			<TouchableWithoutFeedback onPress={this._onPressHandler.bind(this)}>
				<View>
					<CardSection>
						<Text style={styles.item}>{title}</Text>
					</CardSection>
					{expanded && this.renderDesc()}
				</View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = {
	item: {
		fontSize: 18,
		paddingLeft: 15
	},
	description: {
		paddingLeft: 30,
		paddingRight: 15
	}
}

const mapStateToProps = (state, ownProps) => {
	// ownProps == this.props in the component
	// pre calc the props based on the selection ID so we can remove all logic in the component
	const expanded = state.selectionID === ownProps.id
	return {
		expanded
	}
}

export default connect(mapStateToProps, actions)(ListItem)
