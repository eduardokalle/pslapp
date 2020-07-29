import React, { Component, useState, useEffect } from 'react';
import Social from './Social';
import * as rssParser from 'react-native-rss-parser';

import { StyleSheet, View, Text, SafeAreaView, ScrollView, Linking } from 'react-native';
import { Card, Button } from 'react-native-elements'


function Blog(props) {
	const [data, setData] = useState({});
    useEffect(() => {
		console.log('----')
		return () => {
			fetch('https://seoparatuweb.com/wprss')
			.then((response) => response.text())
			.then(async (responseData) => {
				const rss = await rssParser.parse(responseData);
				//console.log("rss == ", rss);
				setData(rss);
				/*
				console.log('Tipo rss  ' + rss.type);
				console.log('Titulo de rss  ' + rss.title );
				console.log('Cantidad de noticias rss  '+ rss.items.length);
				
				console.log('Imagen item  ' + rss.items[0].links[0].url);
				console.log('Titulo item  ' + rss.items[0].title);
				console.log('Item descripcion  ' + rss.items[0].description);
				console.log('...............')
				console.log('Imagen item ' + rss.items[1].links[0].url);
				console.log('Titulo item  ' + rss.items[1].title);
				console.log('Item descripcion  ' + rss.items[1].description);
				console.log('...............')
				console.log('Imagen item ' + rss.items[2].links[0].url);
				console.log('Titulo item  ' + rss.items[2].title);
				console.log('Item descripcion  ' + rss.items[2].description);
				console.log('End ...............')
			
				//console.log('Autor del rss ' + rss.itunes.authors[0].name);
			    */
			});
		}
	}, [])

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
				<SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView}>
			<View>
				{data.items?.map((item,i) => (
					<Card
					key={i}
					title={item.title}
					image={item.links[0].url}>
				
					<Text style={{marginBottom: 10}}>
						{item.description}
					</Text>
					<Button
						icon={{name: 'zoom-in'}}
						onPress={() => {	
							Linking.openURL(item.links[0].url);	
							}}
						buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#C6469A' }}
						title='Leer mas' />
					</Card>	
				))}
			</View>
			</ScrollView>
        </SafeAreaView>  
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
	},
	  safeAreaView: {
		flex: 1,
		//marginTop: Constants.statusBarHeight,
	},
	  scrollView: {
		backgroundColor: 'white',
		marginHorizontal: 0,
		},
	vbtnPhone: {
		backgroundColor : '#C6469A'
	}
});

export default Blog;
