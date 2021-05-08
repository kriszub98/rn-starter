import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';

const HomeScreen = (props) => {
	console.log(props.navigation);
	return (
		<View>
			<Text style={styles.text}>It just works!</Text>
			<Button
				title="Go to Components Demo"
				onPress={() => {
					props.navigation.navigate('Components');
				}}
			/>
			<TouchableOpacity
				onPress={() => {
					props.navigation.navigate('List');
				}}
			>
				<Text style={styles.text}>Go to List Demo</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;
