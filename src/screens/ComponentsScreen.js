import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const yourname = 'Christopher';
	return (
		<View>
			<Text style={styles.textStyle}>Getting started with React Native!</Text>
			<Text style={styles.smallTextStyle}>My name is {yourname}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45
	},
	smallTextStyle: {
		fontSize: 20
	}
});

export default ComponentsScreen;
