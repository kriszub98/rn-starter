import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
	return (
		<View>
			<Text>Input your name:</Text>
			<TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} />
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1
	}
});

export default TextScreen;
