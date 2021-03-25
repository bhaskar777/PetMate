import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Display = (props) => {
	const RandomImage = (index) => {
		if (index % 2) {
			return require('../../assets/icons/1.jpeg');
		} else if (index % 3) {
			return require('../../assets/icons/2.jpeg');
		} else {
			return require('../../assets/icons/3.jpeg');
		}
	};



	return (
		//Passing data from screen as a param
		<TouchableOpacity
		onPress={()=> props.navigation.navigate("ContactInfo",{img:RandomImage(props.index)})}
		>
		<View style={styles.containerView}>
			<View style={{ padding: 16 }}>
				<Image source={RandomImage(props.index)} style={styles.image} />
			</View>
			<View style={{ flex: 1 }}>
				<Text style={styles.titleText} numberOfLines={2}>
					{props.item.title}
				</Text>
				<Text style={styles.softwareText}>Software</Text>
			</View>
		</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	containerView: {
		backgroundColor: '#fff',
		margin: 12,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 12,
		marginStart: 24,
		marginEnd: 24
	},
	image: { 
		width: 34, 
		height: 34,
		borderRadius:8
	 },
	titleText: { 
		width: '90%'
	 },
	 softwareText:{
		 color:'#e5e5e5',
		 marginTop:4
	 }
});

export default Display;
