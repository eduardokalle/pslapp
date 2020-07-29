import React, { Component } from 'react';
import Social from './Social';
import { List, ListItem } from 'react-native-elements';

import { StyleSheet, View, TouchableOpacity, Image, ImageBackground, Text, SafeAreaView, ScrollView } from 'react-native';

const list = [
	{
		name: 'Elizabeth olse',
		avatar_url: 'https://pbs.twimg.com/media/EdMQ-LZXgA0_mSG?format=jpg&name=medium',
		subtitle: 'Usuario ',
		text:'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam ligula'
	},
	{
		name: 'Chris Jackson',
		avatar_url: 'https://i.pinimg.com/236x/c5/97/f6/c597f60667ae86aa062c13d16177a6dd.jpg',
		subtitle: 'Usuario',
		text:'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam ligula'
	},
	{
		name: 'Natalia Boyeva',
		avatar_url: 'https://i.pinimg.com/236x/fc/bc/a6/fcbca660395f5bf75fc42ad2fa1ce957--wavy-hair-her-hair.jpg',
		subtitle: 'Usuario',
		text:'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam ligula Hac sodales non vestibulum morbi facilisis scelerisque convallis sed netus, litora platea aliquam.'
	},
	{
		name: 'Dacre Mont',
		avatar_url: 'https://i.pinimg.com/236x/78/40/13/784013e5f3429a8de3b0d1f3213d26ca.jpg',
		subtitle: 'Usuario',
		text:'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam ligula'
	},
	{
		name: 'Ana Martinez',
		avatar_url: 'https://i.pinimg.com/236x/95/58/ff/9558ff7bfe1923acbfba2f331ebc59fd.jpg',
		subtitle: 'Usuario',
		text:'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam ligula'
	},
	{
		name: 'Chris Pine',
		avatar_url: 'https://i.pinimg.com/236x/da/d2/09/dad2097b7bd7ffc73b9d838bf0d2c3fd.jpg',
		subtitle: 'Usuario',
		text:'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam ligula Hac'
	},
	{
		name: 'Margot Robbie',
		avatar_url: 'https://i.pinimg.com/236x/e1/f8/ff/e1f8ff267b8551dd1ccf08cf3c734374.jpg',
		subtitle: 'Usuario',
		text:'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam ligula Hac'
	},
	{
		name: 'Amanda Sey',
		avatar_url: 'https://i.pinimg.com/236x/ab/99/88/ab9988f91d06b93e3fbb1693ae316308.jpg',
		subtitle: 'Usuario',
		text:'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam ligula Hac sodales non vestibulum morbi facilisis scelerisque convallis sed netus, litora platea aliquam ornare nulla orci curae dui pharetra eget'
	},
	{
		name: 'Jennifer Lawrence',
		avatar_url: 'https://i.pinimg.com/236x/01/84/08/018408df37ac46f98f54b8b8f2d62a4a.jpg',
		subtitle: 'Usuario',
		text:'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam ligula Hac sodales'
	},
	{
		name: 'Patrick dempsey',
		avatar_url: 'https://i.pinimg.com/236x/a9/b2/fd/a9b2fdb12dcf8a29b82b1ba291bcefac--patrick-dempsy-dr-mcdreamy.jpg',
		subtitle: 'Usuario',
		text:'Lorem ipsum dolor sit amet consectetur adipiscing elit nullam ligula Hac sodales'
	}
];

function ListT(props) {
	return (
		<>
		<View style={styles.vheader}>   
           </View> 
			<Social />
		<SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView}>
			<View>
				<View style={styles.container1}>
					<Text style={styles.textc}>Testimonios</Text>
				</View>
			</View>
			{/*<View style={styles.container2}>*/}
			<View>
				{list.map((l, i) => (
					<ListItem
						key={i}
						leftAvatar={{ source: { uri: l.avatar_url } }}
						title={l.name}
						subtitle={l.text}
						textK={l.text}
						bottomDivider
					/>
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
	backgroundColor: 'pink',
	marginHorizontal: 0,
	}
});

export default ListT;
