import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Field = (props) => {
	const {label, onTextChange, value, placeholder, secure = false} = props
	const {inputStyle, labelStyle, containerStyle} = styles
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			{/* TextInputs have no default height and width */}
			<TextInput
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				secureTextEntry={secure}
				onChangeText={onTextChange}
			/>
		</View>
	)
}

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		flex: 3,
		lineHeight: 23,
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
	},
	containerStyle: {
		flex: 1,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
	},
}

export { Field }
