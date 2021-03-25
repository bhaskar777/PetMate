import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { Text, View, SafeAreaView, Image, StyleSheet } from 'react-native';


const Splashscreen = ({ navigation }) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.push('Main');
		}, 2000);
	}, []);

	return (
		<LinearGradient
			colors={[ '#cc2b5e', '#753a88' ]}
			start={{ x: 0, y: 0 }}
			end={{ x: 0, y: 1 }}
			style={{ flex: 1 }}
		>
			<SafeAreaView style={styles.container}>
				<Image
					source={require('../../assets/gif/pet.gif')}
					style={{ width: 250, height: 200, }}
					resizeMode="contain"
				/>
			</SafeAreaView>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
    container:{
        flex:1,
		justifyContent:'center',
		alignItems:'center'
    }
})


export default Splashscreen;
