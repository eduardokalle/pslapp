import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Text, 
         View, 
         StyleSheet,  
         TextInput, 
         Button,
         Alert ,
         KeyboardAvoidingView 
         } from 'react-native';

export default function  AppointmentForm () {

    
    createAlert = () =>
    
        Alert.alert(
                "Te informamos",
                "Que tu registro fue enviado",
                [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }

                /*
                ingresra en el button
                onPress={this.createAlert}
                */
                
        );
    

       return(
              <>
                <KeyboardAwareScrollView
                   style={{ backgroundColor: '#0064AD' }}
                   resetScrollToCoords={{ x: 0, y: 0 }}
                  
                   scrollEnabled={false}
                >
                <View style={ styles.vreform }> 
                    <View style={ styles.reform }>
                        <Text style={ styles.header}> 
                            Contacta con Nosotros
                        </Text>
                        <TextInput style = {styles.textinputF} placeholder='Nombre'
                                placeholderTextColor = "#fff"
                                underlineColorAndroid={'transparent'}
                        />
                        <TextInput style = {styles.textinputF} placeholder='Apellido'
                                placeholderTextColor = "#fff" 
                                underlineColorAndroid={'transparent'}
                        />  
                        <TextInput  style = {styles.textinputF} placeholder='Email'
                                keyboardType={'email-address'}
                                placeholderTextColor = "#fff"
                                secureTextEntry={false}  underlineColorAndroid={'transparent'}  
                        /> 
                        <TextInput  style = {styles.textinputF} placeholder='telefono'
                                keyboardType={'phone-pad'}
                                placeholderTextColor = "#fff"
                                secureTextEntry={false}  underlineColorAndroid={'transparent'}
                        /> 
                         <TextInput  style = {styles.textinputT} placeholder='Mensaje'
                                multiline={true}
                                numberOfLines={3}
                                placeholderTextColor = "#fff"
                                underlineColorAndroid={'transparent'}
                        /> 
                        <View style={ styles.button }>
                            <Button color="#C6469A"
                                title="     Enviar      "
                                onPress={this.createAlert}
                            />
                        </View> 
                    </View>
                  </View>
                  </KeyboardAwareScrollView>
              </>
       );
}

const styles = StyleSheet.create({
    vreform: {
        flex: 1,
        alignSelf :'stretch',
        backgroundColor : '#0064AD',
        color : '#fff',
        //marginLeft: '5%',
    },
    reform: {
        top: 70,
        flex: 1,
        alignSelf :'stretch',
        backgroundColor : '#0064AD',
        color : '#fff',
        //marginLeft: '5%',
    },
    header:{
        fontSize:24,
        color:'#fff',
        paddingTop: 40,
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        marginLeft: '10%',
        marginRight : '10%',
        alignSelf: "center",
    },
    textinputF :{
        alignSelf :'stretch',
        color: '#fff',
        height:40,
        marginBottom:30,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        backgroundColor: '#0064AD',
        marginLeft: '10%',
        marginRight : '10%',
        //flex: -15,
    },
    textinputT :{
        alignSelf :'stretch',
        color: '#fff',
        height:60,
        marginBottom:60,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        backgroundColor: '#0064AD',
        marginLeft: '10%',
        marginRight : '10%',
        //flex: -15,
    },
    button:{
       // alignSelf :'center',
        alignSelf :'flex-end',
        alignItems: 'center',
        padding: 0,
        backgroundColor:'#C6469A',
        paddingRight: 0,
        marginBottom: 180,
        marginRight :'10%',
    },
     textb:{
        color: '#fff',
        fontWeight : 'bold',
        
    },
     vbtnPhone: {
        backgroundColor : '#C6469A'
    }
});