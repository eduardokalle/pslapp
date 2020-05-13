import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Text, 
    View, 
    StyleSheet,  
    TextInput, 
    Button,
    Linking
    } from 'react-native';


const Social = () => {
    return ( 
       <>
          <View style={styles.container}>
                <View style={styles.vwBtns1}>
						<Icon.Button name="facebook" onPress={() => {
							Linking.openURL('https://www.facebook.com');
							}} solid>
                                
                        </Icon.Button>
                        </View>
                <View style={styles.vwBtns2}>
                        <Icon.Button 
                        
                        color='#fff'
                        backgroundColor= "#e4405f"
                        name="instagram" onPress={() => {
							Linking.openURL('https://www.facebook.com');
							}} solid>
                                
                        </Icon.Button>
				</View>
                <View style={styles.vwBtns3}>
                        <Icon.Button 
                        color='#fff'
                        backgroundColor= "#00acee"
                        name="twitter" onPress={() => {
							Linking.openURL('https://www.facebook.com');
							}} solid>
                                
                        </Icon.Button>
				</View>
                <View style={styles.vwBtns4}>
                        <Icon.Button 
                        color='#fff'
                        backgroundColor= "#0072b1"
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
        flexDirection: "row"
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
        top: 10,
        marginLeft: '18%'
       
    },
    vwBtns2: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 10,
        marginLeft: '26%',
        width: 3
    },
    vwBtns3: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 10,
        marginLeft: '41%',
    },
    vwBtns4: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		position: 'absolute',
        top: 10,
        marginLeft: '55%',
	},
    

})