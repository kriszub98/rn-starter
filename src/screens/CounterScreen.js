import React, { useReducer } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const reducer = (state, action) => {
	// state === { counter: number }
	// action === { type: 'increase_counter' || 'decrease_counter' }
	switch (action.type) {
		case 'increase_counter':
			return { ...state, counter: state.counter + 1 };
		case 'decrease_counter':
			return { ...state, counter: state.counter - 1 };
		default:
			return state;
	}
};

const CounterScreen = () => {
	const [ state, dispatch ] = useReducer(reducer, { counter: 0 });
	const { counter } = state;
	return (
		<View>
			<Button title="Increase" onPress={() => dispatch({ type: 'increase_counter' })} />
			<Button title="Decrease" onPress={() => dispatch({ type: 'decrease_counter' })} />
			<Text>Current Count: </Text>
			<Text>{counter}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
