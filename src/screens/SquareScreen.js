import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter.js';

const COLOR_INCREMENT = 15;
//Action means how to change our state object
const reducer = (state, action) => {
	// State === { red: number, green: number, blue: number }
	// action == { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
	switch (action.colorToChange) {
		case 'red':
			//Copy all properties and overwrite red color
			if (state.red + action.amount > 255 || state.red + action.amount < 0) {
				return state; // We always must return value from reducers!!! if we dont its undefined after rerender
			}
			return { ...state, red: state.red + action.amount };
		case 'green':
			if (state.green + action.amount > 255 || state.green + action.amount < 0) {
				return state; // We always must return value from reducers!!! if we dont its undefined after rerender
			}
			return { ...state, green: state.green + action.amount };
		case 'blue':
			if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
				return state; // We always must return value from reducers!!! if we dont its undefined after rerender
			}
			return { ...state, blue: state.blue + action.amount };
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
				onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ colorToChange: 'red', amount: -COLOR_INCREMENT })}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ colorToChange: 'green', amount: -COLOR_INCREMENT })}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ colorToChange: 'blue', amount: -COLOR_INCREMENT })}
			/>
			<View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
		</View>
	);
};

const styles = StyleSheet.create({});
export default SquareScreen;
