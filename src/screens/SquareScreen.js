import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter.js';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
	const [ red, setRed ] = useState(0);
	const [ green, setGreen ] = useState(0);
	const [ blue, setBlue ] = useState(0);

	const setColor = (color, change) => {
		// color === 'red', 'green', 'blue'
		// change === +COLOR_INCREMENT, -COLOR_INCREMENT

		switch (color) {
			case 'red':
				if (red + change > 255 || red - change < 0) return;
				else setRed(red + change);
				return;
			case 'green':
				if (green + change > 255 || green - change < 0) return;
				else setRed(green + change);
				return;
			case 'blue':
				if (blue + change > 255 || blue - change < 0) return;
				else setRed(blue + change);
				return;
		}
	};

	return (
		<View>
			<ColorCounter
				color="Red"
				onIncrease={() => setColor('red', COLOR_INCREMENT)}
				onDecrease={() => setColor('red', -COLOR_INCREMENT)}
			/>
			<ColorCounter
				color="Green"
				onIncrease={() => setGreen(green + COLOR_INCREMENT)}
				onDecrease={() => setGreen(green - COLOR_INCREMENT)}
			/>
			<ColorCounter
				color="Blue"
				onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
				onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
			/>
			<View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
		</View>
	);
};

const styles = StyleSheet.create({});
export default SquareScreen;
