import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Text, 
    View, 
    StyleSheet,  
    TextInput, 
    Button,
    Linking,
    Image
    } from 'react-native';


const Social = () => {
    return ( 
       <>
          <View style={styles.container}>
                <Image
                style={styles.imgS}
                source={require('../assets/images/ProtejoLogo.png')}
                />
                <View style={styles.vwBtns1}>
                        <Icon.Button 
                        color='#000000'
                        backgroundColor= "#fff"
                        name="facebook" onPress={() => {
							Linking.openURL('https://www.facebook.com/protejoenlinea/');
							}} solid>
                                
                        </Icon.Button>
                        </View>
                <View style={styles.vwBtns2}>
                        <Icon.Button 
                        color='#000000'
                        backgroundColor= "#fff"
                        name="instagram" onPress={() => {
							Linking.openURL('https://www.instagram.com/protejoenlinea/');
							}} solid>
                                
                        </Icon.Button>
				</View>
                <View style={styles.vwBtns3}>
                        <Icon.Button 
                        color='#000000'
                        backgroundColor= "#fff"
                        name="twitter" onPress={() => {
							Linking.openURL('https://twitter.com/');
							}} solid>
                                
                        </Icon.Button>
				</View>
                <View style={styles.vwBtns4}>
                        <Icon.Button 
                        color='#000000'
                        backgroundColor= "#fff"
                        name="linkedin" onPress={() => {
							Linking.openURL('https://www.facebook.com');
							}} solid>
                                
                        </Icon.Button>
				</View>
          </View>
       </>
     );
}
 
export default Social;

const styles = StyleSheet.create({
    
    container: {
        width: 400,
        height: 55,
        backgroundColor: "#fff",
        flexDirection: "row",
        marginLeft: '0%',
      },
      text: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		color: 'black',
        fontSize:15,
        position: 'absolute',
        top: 12,
        marginLeft: '5%'
    },
    vwBtns1: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 3,
        marginLeft: '40%'
       
    },
    vwBtns2: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 3,
        marginLeft: '45%',
        width: 3
    },
    vwBtns3: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 3,
        marginLeft: '60%',
    },
    vwBtns4: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 3,
        marginLeft: '73%',
    },
    imgS: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 3,
        height: '75%',
        width: '35%',
        marginLeft: '11%',
	},
    

})