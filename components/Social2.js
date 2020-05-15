import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Text, 
    View, 
    StyleSheet,  
    TextInput, 
    Button,
    Linking
    } from 'react-native';


const Social2 = () => {
    return ( 
       <>
          <View style={styles.container}>
                <View style={styles.vwBtns1}>
                        <Icon.Button 
                        backgroundColor= "#013862"
                        name="facebook" onPress={() => {
							Linking.openURL('https://www.facebook.com');
							}} solid>
                                
                        </Icon.Button>
                        </View>
                <View style={styles.vwBtns2}>
                        <Icon.Button 
                        
                        color='#fff'
                        backgroundColor= "#013862"
                        name="instagram" onPress={() => {
							Linking.openURL('https://www.facebook.com');
							}} solid>
                                
                        </Icon.Button>
				</View>
                <View style={styles.vwBtns3}>
                        <Icon.Button 
                        color='#fff'
                        backgroundColor= "#013862"
                        name="twitter" onPress={() => {
							Linking.openURL('https://www.facebook.com');
							}} solid>
                                
                        </Icon.Button>
				</View>
                <View style={styles.vwBtns4}>
                        <Icon.Button 
                        color='#fff'
                        backgroundColor= "#013862"
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
        backgroundColor: "#013862",
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
        top: -5,
        marginLeft: '18%'
       
    },
    vwBtns2: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: -5,
        marginLeft: '26%',
        width: 3
    },
    vwBtns3: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: -5,
        marginLeft: '41%',
    },
    vwBtns4: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: -5,
        marginLeft: '55%',
	},
    

})