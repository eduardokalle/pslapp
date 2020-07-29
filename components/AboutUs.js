import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Button, Linking, SafeAreaView, ScrollView } from "react-native";
import Social from './Social';
//import Constants from 'expo-constants';

/*
 <ImageBackground
                source={require("../assets/images/wu.png")}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
            >
            <View style={styles.overlay}>
*/

function AboutU(props) {
  return (
       <>
        
            <View style={styles.vheader}>
              </View>
                  <Social/>
            <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView}>       
            <View style={styles.vTitulo}>
              <Text style={styles.textTitulo}>Quienes Somos</Text>
            </View>  
            <View style={styles.container1}>
              <Text style={styles.textTitulo1}>Misión</Text>
              <Text style={styles.text1}>Satisfacer las necesidades de salud de nuestra población ofreciéndole 
                  servicios de atención general y especializada y  con calidad y eficiencia.
              </Text>
            </View>
            <View style={styles.division}></View>
            <View style={styles.container2}>
              <Text style={styles.textTitulo2}>Visión</Text>
            <Text style={styles.text1}>Queremos ser los referentes de salud de nuestra población, aportando calidad, confianza y seguridad en nuestros servicios de salud que reciben todos los ciudadanos que atendemos a lo largo de su vida.{'   '}
                        Queremos alcanzar la excelencia en todos los ámbitos de nuestra organización y contribuir así al progreso sostenible del sistema sanitario.
                        Queremos que los profesionales se sientan partícipes y orgullosos de pertenecer a nuestra organización.
            </Text>
            </View>
            <View style={styles.division}></View>
            <View style={styles.container3}>
                    <Text style={styles.textTitulo3}>¿Qué es protejo?</Text>
                    <Text style={styles.text3}>Somos una empresa  prestadora de servicios generales y  de salud .  quienes trabajamos con un grupo de profesionales para atender tus necesidades y protejer tu tranquilidad .
                    </Text>
                    </View>
            <View style={styles.division2}></View>
          </ScrollView>
        </SafeAreaView>  
      </>    
  );
}

const styles = StyleSheet.create({
  container1: {
    width: 400,
    height: 150,
    overflow: "hidden",
    backgroundColor : 'rgba(25, 100, 174, 0.7)',
    
  },
  container2: {
    width: 400,
    height: 260,
    overflow: "hidden",
    backgroundColor : 'rgba(25, 100, 174, 0.7)',
    
  },
   container3: {
    width: 400,
    height: 160,
    overflow: "hidden",
    backgroundColor : 'rgba(25, 100, 174, 0.7)',
    
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  overlay: {
    backgroundColor: "rgba(30,26,26,0.4)",
    flex: 1
  },
  textTitulo1: {
    color: "white",
    fontSize: 24,
    marginTop: 24,
    alignSelf: "center"
  },
  textTitulo2: {
    color: "white",
    fontSize: 24,
    marginTop: 24,
    alignSelf: "center"
  },
  textTitulo3: {
    color: "white",
    fontSize: 24,
    marginTop: 23,
    alignSelf: "center"
  },
  textTitulo: {
    color: "white",
    fontSize: 24,
    marginTop: 7,
    alignSelf: "center"
  },
  following: {
    alignItems: 'center',
    width: 90.2,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 36,
    alignSelf: "center", 
  },
  text: {
    color: "rgba(31,178,204,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  text1: {
    color: "white",
    fontSize: 15,
    marginTop: 18,
    alignSelf: "center",
    paddingLeft: 15,
    paddingRight:15,
  },
  text2: {
    color: "white",
    fontSize: 15,
    marginTop: 18,
    alignSelf: "center",
    paddingLeft: 15,
    paddingRight:15,
  },
  text3: {
    color: "white",
    fontSize: 15,
    marginTop: 18,
    alignSelf: "center",
    paddingLeft: 15,
    paddingRight:15,
  },
  
  vheader : {
    width: 'auto',
    height: 50,
    backgroundColor : '#fff',
    opacity: 0.7,
    color : '#fff',
    paddingLeft: 0,
    paddingRight:0,
    //borderColor: 'red'
},  
vTitulo : {
  width: 'auto',
  height: 70,
  backgroundColor : 'rgba(25, 100, 174, 0.7)',
  color : '#fff',
  paddingLeft: 0,
  paddingRight:0,
  //borderColor: 'red'
},
division : {
  width: 'auto',
  height: 8,
  backgroundColor : '#1964AE',
  opacity: 0.7,
  color : '#fff',
  paddingLeft: 0,
  paddingRight:0,
  //borderColor: 'red'
},
division2 : {
  width: 'auto',
  height: 40,
  backgroundColor : '#1964AE',
  opacity: 0.7,
  color : '#fff',
  paddingLeft: 0,
  paddingRight:0,
  //borderColor: 'red'
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

export default AboutU;
