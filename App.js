import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar as My } from 'react-native'
import { SafeAreaView, StyleSheet, Platform} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyStack from './src/Navigation/StackNavigation';
const Tab = createMaterialTopTabNavigator();



export default function App() {
	return (
		<SafeAreaView style={{ flex: 1, marginTop:Platform.OS==="android"? My.currentHeight:0 }}>
			<StatusBar backgroundColor = "#935EC5" />
			<MyStack/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
