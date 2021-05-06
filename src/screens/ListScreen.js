import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';

const ListScreen = () => {
	const friends = [
		{ name: 'Friend #1' },
		{ name: 'Friend #2' },
		{ name: 'Friend #3' },
		{ name: 'Friend #4' },
		{ name: 'Friend #5' },
		{ name: 'Friend #6' },
		{ name: 'Friend #7' },
		{ name: 'Friend #8' },
		{ name: 'Friend #9' }
	];

	return (
		<FlatList
			data={friends}
			renderItem={(element) => {
				//element === { item: {name: 'Friend #1'}, index: 0 }
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: { fontSize: 35 }
});

export default ListScreen;
