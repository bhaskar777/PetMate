import React, { useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import ContactInfoHeader from '../Components/ContactInfoHeader';

const ContactInfo = (props) => {

	const [ detail, setDetails ] = useState([]);
	useEffect(() => {
		apidata();
	}, []);

	const apidata = async () => {
		try {
			let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
			let data = await response.json();
			console.log(data);
			setDetails(data);
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<View>
			<ContactInfoHeader navigation={props.navigation} />
			{/* Getting Data from params */}
			<Image style={styles.image} source={props.route.params.img} resizeMode={'cover'} />
			<Text style={styles.textStyle}>{detail.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 264,
		marginTop: 24
	},
	textStyle: {
		marginStart: 12,
		marginTop: 8,
		fontSize: 16
	}
});

export default ContactInfo;
