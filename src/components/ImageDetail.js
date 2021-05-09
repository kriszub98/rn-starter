import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imageSource, title, score }) => {
	return (
		<View>
			<Image source={imageSource} />
			<View>
				<Text>{title}</Text>
				<Text>{score}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;
