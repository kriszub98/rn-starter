import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter.js';

const COLOR_INCREMENT = 15;
//Action means how to change our state object
const reducer = (state, action) => {
	// Comments to reducers that shows initial values as well as the behaviour of the data
	// State === { red: number, green: number, blue: number }
	// action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

	// Changes done due to community conventions:
	// action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
	switch (action.type) {
		case 'change_red':
			return state.red + action.payload > 255 || state.red + action.payload < 0
				? state
				: { ...state, red: state.red + action.payload };
		case 'change_green':
			return state.green + action.payload > 255 || state.green + action.payload < 0
				? state
				: { ...state, green: state.green + action.payload };
		case 'change_blue':
			return state.blue + action.payload > 255 || state.blue + action.payload < 0
				? state
				: { ...state, blue: state.blue + action.payload };
		default:
			return state;
	}
};

const SquareScreen = () => {
	//Dispatch should be represented as runMyReducer!
	const [ state, dispatch ] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	const { red, green, blue } = state;
	return (
		<View>
			<ColorCounter
				color="Red"
				onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ type: 'change_red', payload: -COLOR_INCREMENT })}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ type: 'change_green', payload: -COLOR_INCREMENT })}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ type: 'change_blue', payload: -COLOR_INCREMENT })}
			/>
			<View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
		</View>
	);
};

const styles = StyleSheet.create({});
export default SquareScreen;
