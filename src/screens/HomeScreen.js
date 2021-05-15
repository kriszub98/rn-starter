import React from 'react';
import { Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>It just works!</Text>
			<Button
				title="Go to Components Demo"
				onPress={() => {
					navigation.navigate('Components');
				}}
			/>
			<Button
				title="Go to List Demo"
				onPress={() => {
					navigation.navigate('List');
				}}
			/>
			<Button
				title="Go to Image Demo"
				onPress={() => {
					navigation.navigate('Image');
				}}
			/>
			<Button
				title="Go to Counter Demo"
				onPress={() => {
					navigation.navigate('Counter');
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
