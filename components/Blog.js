import React, { Component } from 'react';
import Social from './Social';


import { StyleSheet, View, Text } from 'react-native';



function Blog(props) {
	return (
		<>
		<View style={styles.vheader}>   
           </View> 
			<Social />
			<View>
				<View style={styles.container1}>
					<Text style={styles.textc}>Noticias</Text>
				</View>
			</View>
			<View>
			
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: 'stretch'
	},
	textc: {
		color: 'white',
		alignSelf: 'center',
		justifyContent: 'center',
		fontWeight: 'bold',
		fontSize: 20
	},

	vheader: {
		width: 'auto',
		height: 50,
		backgroundColor: '#fff',
		color: '#fff',
		paddingLeft: 0,
		paddingRight: 0
	},

	container1: {
		width: 'auto',
		height: 60,
		backgroundColor: '#0064AD',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		elevation: 0,
		shadowOpacity: 0.1,
		paddingLeft: 0,
		paddingRight: 0,
		shadowOffset: {
			height: 0,
			width: 0
		},
		shadowColor: '#0064AD',
		shadowRadius: 0
	}
});

export default Blog;
