import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet, Button,Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Social from './Social';

export default function Home() {
	return (
		<>
			<View style={styles.vheader}>
           </View>
			<ImageBackground  style={styles.image}>
				<Social/>
					<Text style={styles.text1}>Protejo      Tu           Salud</Text>
				<View style={styles.vwTexto2}>
					<Text style={styles.text2}>Salud a tu alcance</Text>
				</View>
				<View style={styles.vwTexto3}>
                    <Text style={styles.text3}>Para contactarnos lo puedes hacer por estas dos opciones</Text>
                </View>
				<View style={styles.vwBtns}>
					<View style={styles.vbtn}>
					    <Icon.Button style={styles.vbtnPhone}  name="phone" onPress={() => {
						          	Linking.openURL(`tel:${+573105395410}`);
						       	}} solid>
							          Llámanos
						</Icon.Button>
					</View>
					<View style={styles.vbtn}>
						<Icon.Button style={styles.vbtnPhone}  name="whatsapp" onPress={() => {
							Linking.openURL('https://wa.me/573105395410');
							}} solid>
							Contáctanos
						</Icon.Button>
					</View>
				</View>
			</ImageBackground>
		</>
	);
}

const styles = StyleSheet.create({
	vheader: {
		width: 'auto',
		height: 50,
		backgroundColor: '#fff',
		color: '#fff',
		paddingLeft: 0,
		paddingRight: 0
	},
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'flex-end',
		backgroundColor: '#fff',
	},
	vwBtns: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'relative',
		bottom: 150,
	},
	vbtn: {
		marginRight: 10,
	},
	vwTexto: {
		position: 'absolute',
		top: 60,
		marginLeft: '5%',
		width: '95%',
	},
	vwTexto2: {
		position: 'absolute',
		top: 420,
		marginLeft: '5%',
		width: '95%',
	},
	vwTexto3: {
		position: 'absolute',
		top: 470,
		marginLeft: '5%',
		width: '95%',
	},
	text1: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		fontWeight: '100',
		fontSize:80,
		color: '#000000',
		fontFamily: '',
		paddingLeft: '5%',
	},
	text2: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		color: '#000000',
		fontSize:30
	},
	text3: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		color: '#000000',
		fontSize:16
	},
	vbtnPhone: {
		backgroundColor : '#C6469A'
	}

});

//<ImageBackground source={require('../assets/backgr.png')} style={styles.image}></ImageBackground>
