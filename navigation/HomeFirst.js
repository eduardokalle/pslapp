import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet, Button,Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import homeD from  './Drawer'


export default function H(props) {



	return (
		<>

				<View style={styles.vheader}>
			    </View>
				<ImageBackground  style={styles.image}>
				    <View style={styles.vwTexto}>
						<Text style={styles.text1}>PROTEJO</Text>
					</View>
					<View style={styles.vwTexto2}>
						<Text style={styles.text2}>¿Qué es protejo?</Text>
					</View>
					<View style={styles.vwTexto3}>
						<Text style={styles.text3}>Somos una empresa prestadora de servicios de salud y servicios generales quienes trabajamos con un grupo de profesionales para atender tus necesidades y protejer tu tranquilidad .
                        </Text>
					</View>

					<View style={styles.vwBtns}>

						<View style={styles.vbtn}>
							<Icon.Button style={styles.vbtnPhone} onPress={() => props.setShowMain(true)}>
											PROTEJO TU SALUD
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
		marginLeft: '14%',
		width: '95%',
	},
	vwTexto2: {
		position: 'absolute',
		top: 220,
		marginLeft: '21%',
		width: '95%',
	},
	vwTexto3: {
		position: 'absolute',
		top: 370,
		marginLeft: '7%',
		width: '95%',
	},
	text1: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		fontWeight: '100',
		fontSize:60,
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
