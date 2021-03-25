import React from 'react';
import { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Display from '../Components/Display';
import { BackHandler } from 'react-native';

const Main = (props) => {
	const [ detail, setDetails ] = useState([]);

	const handleBackButtonClick = () => {
		BackHandler.exitApp();
		return true;
	}

	useEffect(() => {
		apiData();
		BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
		return () => {
			BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
		};
	}, []);

	//Used for ApiCall
	const apiData = async () => {
		try {
			let response = await fetch('https://jsonplaceholder.typicode.com/todos');
			let data = await response.json();
			// console.log(data);
			setDetails(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={detail}
				showsVerticalScrollIndicator={false}
				renderItem={({ item, index }) => {
					//Passing data from props
					return <Display item={item} index={index} navigation={props.navigation} />;
				}}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	);
};

export default Main;
