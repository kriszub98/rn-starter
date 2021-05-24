import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<View style={styles.viewOneStyle} />
			<View style={styles.viewTwoStyle} />
			<View style={styles.viewThreeStyle} />
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 3,
		borderColor: 'black'
	},
	viewOneStyle: {
		backgroundColor: 'red',
		width: 100,
		height: 100,
		alignSelf: 'flex-start'
	},
	viewTwoStyle: {
		backgroundColor: 'purple',
		width: 100,
		height: 100,
		position: 'absolute',
		alignSelf: 'flex-end'
	},
	viewThreeStyle: {
		backgroundColor: 'green',
		width: 100,
		height: 100,
		position: 'absolute',
		top: 100,
		alignSelf: 'center'
	}
});

export default BoxScreen;
