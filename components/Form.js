import * as React from 'react';
import axios from 'axios';

import {Form, Input, View, Label } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFormik } from 'formik';

import { StyleSheet,  Button, Alert } from 'react-native';

export default function form() {
    
              
    const {values, isSubmitting, setFieldValue, handleSubmit, errors, resetForm} = useFormik({

        initialValues : {
            nombre:'',
            apellido:'',
            mail:'',
            tel:'',
            mensaje:''
        },
        onSubmit : values => {

            const { nombre , apellido , tel , mail , mensaje } = values;

         //axios.post('http://192.168.1.23:4500/sendMail' , {
           axios.post('https://protejo-back.herokuapp.com/sendmail', {
              nombre,
              apellido,
              tel,
              mail,
              mensaje
          }) 
            .then(res=>{
              console.log(res);
              console.log(res.values);
    
                Alert.alert(
                        "Te informamos",
                        "Que tu registro fue enviado",
                        [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                        ],
                        { cancelable: false }

                );
                resetForm({});

            })

        },
        validate: values => {

            const errors = {};
            /*
            if(!values.name || values.name.length < 2 ) errors.name = 'Nombre invalido'
            if(!values.apellido || values.apellido.length < 2 ) errors.apellido = 'Apellido invalido'
            if(!values.mail || values.mail.length < 2 ) errors.mail = 'Email invalido'
            if(!values.tel || values.tel.length < 4 ) errors.tel = 'Telefono invalido'
            if(!values.mensaje || values.mensaje.length < 4 ) errors.mensaje = 'Mensaje invalido'
            
            console.log(values);
            */
        }
    })

       return(
              <>
                <KeyboardAwareScrollView
                   style={{ backgroundColor: '#0064AD' }}
                   resetScrollToCoords={{ x: 0, y: 0 }}
                   scrollEnabled={false}
                >
                <View style={ styles.vreform }> 
                    <View style={ styles.reform }>
                        <Label style={ styles.header}> 
                            Contacta con Nosotros
                        </Label>
                           <Form>
                            <Input  style = {styles.textinputF} placeholder='Nombre'
                                    placeholderTextColor = "#fff"
                                    underlineColorAndroid={'transparent'}
                                    value={values.nombre} onChangeText={text => setFieldValue('nombre', text)}
                                   
                            />
                            <Input  style = {styles.textinputF} placeholder='Apellido'
                                    placeholderTextColor = "#fff" 
                                    underlineColorAndroid={'transparent'}
                                    value={values.apellido} onChangeText={text => setFieldValue('apellido', text)}
                                    
                            />  
                            <Input  style = {styles.textinputF} placeholder='Email'
                                    keyboardType={'email-address'}
                                    placeholderTextColor = "#fff"
                                    secureTextEntry={false} 
                                    underlineColorAndroid={'transparent'}  
                                    value={values.mail} onChangeText={text => setFieldValue('mail', text)}
                                   
                            /> 
                            <Input  style = {styles.textinputF} placeholder='telefono'
                                    keyboardType={'phone-pad'}
                                    placeholderTextColor = "#fff"
                                    secureTextEntry={false}  
                                    underlineColorAndroid={'transparent'}
                                    value={values.tel} onChangeText={text => setFieldValue('tel', text)}
                                   
                            /> 
                            <Input  style = {styles.textinputT} placeholder='Mensaje'
                                    multiline={true}
                                    numberOfLines={3}
                                    placeholderTextColor = "#fff"
                                    underlineColorAndroid={'transparent'}
                                    value={values.mensaje} onChangeText={text => setFieldValue('mensaje', text)}
                                    
                            /> 
                            <View style={ styles.button }>
                                <Button color="#C6469A"
                                    title="     Enviar      "
                                    onPress={handleSubmit}
                                />
                            </View> 
                        </Form>
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

     
   