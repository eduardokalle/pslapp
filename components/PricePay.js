import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Linking } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { DataTable, Button  } from 'react-native-paper';
import Social from './Social';
import { WebView } from 'react-native-webview';



function PricePay (props) {


  return (

      <>
        <View style={styles.vheader}>
        </View>
          <Social/>
        <View style={styles.container}>
          <ImageBackground
              source={require("../assets/images/Payment.png")}
              resizeMode="cover"
              style={styles.image}
              imageStyle={styles.image_imageStyle}
          >
              <View style={styles.overlay}>
              <Text style={styles.scienceChannel}>Precios y Pagos </Text>
              <View style={styles.following}>

              </View>
              <Text style={styles.followers}>Conectamos posibilidades para cumplir sueños</Text>
              </View>
          </ImageBackground>
        </View>
        <View>
        <WebView source={{ uri: '../shared/button1.js' }}/>
        </View>
        <DataTable>
            <DataTable.Header>
              <DataTable.Title>Área</DataTable.Title>
              <DataTable.Title >Tipo</DataTable.Title>
              <DataTable.Title >Precio</DataTable.Title>
              <DataTable.Title >pago</DataTable.Title>
            </DataTable.Header>

            <DataTable.Row>
              <DataTable.Cell>Psicología</DataTable.Cell>
              <DataTable.Cell>Básico</DataTable.Cell>
              <DataTable.Cell >120,000 </DataTable.Cell>
              <View>
                <Icon.Button style={styles.vbtnPay}  name="shopping-cart" onPress={() => {
                  Linking.openURL('https://payco.link/570664');
                  }} solid>
                  Pago
                </Icon.Button>
				    	</View>
            </DataTable.Row>

            <DataTable.Row>
             <DataTable.Cell>Medicina G</DataTable.Cell>
              <DataTable.Cell>Básico</DataTable.Cell>
              <DataTable.Cell>Desde 35,000</DataTable.Cell>
              <View>
                <Icon.Button style={styles.vbtnPay}  name="shopping-cart" onPress={() => {
                  Linking.openURL('https://payco.link/538146');
                  }} solid>
                  Pago
                </Icon.Button>
				    	</View>
            </DataTable.Row>

            <DataTable.Row>
             <DataTable.Cell>Especialistas</DataTable.Cell>
              <DataTable.Cell>Básico</DataTable.Cell>
              <DataTable.Cell>Desde 80,000</DataTable.Cell>
              <View>
                <Icon.Button style={styles.vbtnPay}  name="shopping-cart" onPress={() => {
                  Linking.openURL('https://payco.link/570669');
                  }} solid>
                  Pago
                </Icon.Button>
				    	</View>
            </DataTable.Row>

        </DataTable>

      </>
);
}

const styles = StyleSheet.create({
container: {
  width: 400,
  height: 246,
  overflow: "hidden"
},
image: {
  flex: 1
},
image_imageStyle: {},
overlay: {
  backgroundColor: "rgba(30,26,26,0.4)",
  flex: 1
},
scienceChannel: {
  color: "rgba(255,255,255,1)",
  fontSize: 24,
  marginTop: 43,
  alignSelf: "center"
},
following: {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  position: 'relative',
  bottom: -20,
},
space: {
  height: 30,
  backgroundColor: "#fff",

  },
text: {
  color: "rgba(31,178,204,1)",
  fontSize: 14,
  alignSelf: "center"
},
followers: {
  color: "rgba(255,255,255,1)",
  fontSize: 16,
  marginTop: 39,
  alignSelf: "center"
},

vheader : {
  width: 'auto',
  height: 50,
  backgroundColor : '#fff',
  color : '#fff',
  paddingLeft: 0,
  paddingRight:0,
  //borderColor: 'red'
},
vbtn: {
  marginRight: 10,
},
table: {
  width: 400,
  height: 400,
},
cellp: {
  width: 200,

},

// Style button

vbtnPhone: {
  backgroundColor : '#C6469A'
},
vbtnPay: {
  backgroundColor : '#C6469A'
}


});

export default PricePay;
