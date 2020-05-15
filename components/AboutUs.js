import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Button, Linking } from "react-native";
import Social from './Social';

function AboutU(props) {
  return (
        <>
            <View style={styles.vheader}>
            </View>
            <Social/>  
            <View style={styles.container}>
            <ImageBackground
                source={require("../assets/images/wu.png")}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
            >
                <View style={styles.overlay}>
                <Text style={styles.scienceChannel}>Sobre Nosotros</Text>
                <View style={styles.following}>
                  <Button title="Click aqui"
                        onPress={() => {
                        Linking.openURL('https://forms.gle/Qnq76WLj7AJchSNw9');
                      }} solid/>
                </View>
                <Text style={styles.followers}>Conectamos posibilidades para cumplir sueños</Text>
                </View>
            </ImageBackground>
            </View>
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
  followers: {
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 39,
    alignSelf: "center"
  },
  
  vheader : {
    width: 'auto',
    height: 75,
    backgroundColor : '#007aff',
    color : '#fff',
    paddingLeft: 0,
    paddingRight:0,
    //borderColor: 'red'
},  
});

export default AboutU;
