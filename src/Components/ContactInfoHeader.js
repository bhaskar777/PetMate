import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const ContactInfoHeader = (props) => {
	return (
		<View style={styles.header}>
			<TouchableNativeFeedback onPress={() => props.navigation.pop()}>
				<View style={styles.childView}>
					<Image source={require('../../assets/icons/ic_back.png')} style={styles.icon} />
					<Text style={styles.backText}>Back</Text>
				</View>
			</TouchableNativeFeedback>
			<Text style={[ { flex: 0.4, textAlign: 'center' }, styles.textStyles ]}>Contact Info</Text>
			<Text style={[ { flex: 0.3, textAlign: 'right' }, styles.textStyles ]}>Edit</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		marginStart: 16,
		marginEnd: 16,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 24
	},
	childView: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 0.3
	},
	icon: {
		width: 24,
		height: 24
	},
	backText: {
		marginStart: 6,
		fontSize: 18
	},
	textStyles: {
		fontSize: 18,
		color: '#000'
	}
});

export default ContactInfoHeader;
