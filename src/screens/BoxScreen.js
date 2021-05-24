import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>Child nr 1</Text>
			<Text style={styles.textStyle}>Child nr 2</Text>
			<Text style={styles.textStyle}>Child nr 3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 3,
		borderColor: 'black',
		alignItems: 'stretch',
		flexDirection: 'row',
		justifyContent: 'space-around',
		height: 200
	},
	textStyle: {
		borderWidth: 3,
		borderColor: 'red'
	}
});

export default BoxScreen;
