import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const HomeScreen = () => {
	return (
		<View>
			<Text style={styles.text}>It just works!</Text>
			<Button
				title="Go to Components Demo"
				onPress={() => {
					console.log('Button pressed');
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;
