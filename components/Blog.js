import React, { Component, useState, useEffect } from 'react';
import Social from './Social';
import * as rssParser from 'react-native-rss-parser';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

import { StyleSheet, View, Text, SafeAreaView, ScrollView, Linking } from 'react-native';
import { Card, Button, Image  } from 'react-native-elements'


function Blog(props) {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);


    useEffect(() => {
		console.log('----');
		fetch('https://www.portafolio.co/rss/internacional')
		.then((response) => response.text())
		.then((responseData) => rssParser.parse(responseData))
		.then((rss) => {
			setData(rss);
			setLoading(false);
			console.log(rss.items[0].enclosures[0].url)
		});
		
	}, []);

   

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
			{loading ? ( <View style={styles.loadingS}>
							<Bars  size={60} color="#0064AD" />
						 </View>
		                ) : (
				<View>
				{data.items?.map((item, i) => (
					<Card
					key={i}
					title={item.title}
					>
				    <Image
						source={ item.enclosures.url }
						style={{  width: 400, height: 400 }}
                    />
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
			)}
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
	loadingS: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 140,
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
