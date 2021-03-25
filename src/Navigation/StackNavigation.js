import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import ContactInfo from '../Screens/ContactInfo';
import TopTabNavigation from './TopTabNavigation';
import Splashscreen from '../Screens/SplashScreen';

const Stack = createStackNavigator();

const MyStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'SplashScreen'}>
			<Stack.Screen name="SplashScreen" component={Splashscreen} />
				<Stack.Screen name="Main" component={TopTabNavigation} />
				<Stack.Screen name="ContactInfo" component={ContactInfo} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MyStack;
