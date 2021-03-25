import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Main from '../Screens/Home';
import HardWare from '../Screens/Hardware';
import MyStack from './StackNavigation';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: '#935EC5',
				style: { backgroundColor: '#fff' },
				indicatorStyle: {
					borderColor: '#935EC5',
					backgroundColor: '#935EC5'
				}
			}}
		>
			<Tab.Screen name="Home" component={Main} />
			<Tab.Screen name="Hardware" component={HardWare} />
		</Tab.Navigator>
	);
}

const TopTabNavigation = () => {
	return <MyTabs />;
};

export default TopTabNavigation;
