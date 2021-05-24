import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TextComponent } from 'react-native';

const TextScreen = () => {
	const [ name, setName ] = useState('');
	// Inside value of textInput we are going to tell what its initial value should be!
	// We do that to have access to its value inside parent component, normal value does not change state inside parent
	// and we do not want parent to access its child property!
	return (
		<View>
			<Text>Input your name:</Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={name}
				onChangeText={(newValue) => setName(newValue)}
			/>
			<Text>{name}</Text>
			{name.length < 5 ? <Text>Too short of a value</Text> : <Text />}
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
