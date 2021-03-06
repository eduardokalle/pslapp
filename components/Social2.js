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


const Social2 = () => {
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
							Linking.openURL('https://www.facebook.com');
							}} solid>
                                
                        </Icon.Button>
                        </View>
                <View style={styles.vwBtns2}>
                        <Icon.Button 
                        color='#000000'
                        backgroundColor= "#fff"
                        name="instagram" onPress={() => {
							Linking.openURL('https://www.facebook.com');
							}} solid>
                                
                        </Icon.Button>
				</View>
                <View style={styles.vwBtns3}>
                        <Icon.Button 
                        color='#000000'
                        backgroundColor= "#fff"
                        name="twitter" onPress={() => {
							Linking.openURL('https://www.facebook.com');
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
 
export default Social2;

const styles = StyleSheet.create({
    
    container: {
        width: 400,
        height: 55,
        backgroundColor: "#fff",
        flexDirection: "row",
        marginLeft: '-6%',
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
        marginLeft: '45%'
       
    },
    vwBtns2: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 0,
        marginLeft: '50%',
        width: 3
    },
    vwBtns3: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 0,
        marginLeft: '65%',
    },
    vwBtns4: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 0,
        marginLeft: '77%',
    },
    imgS: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 0,
        height: '75%',
        width: '35%',
        marginLeft: '12%',
	},
    

})